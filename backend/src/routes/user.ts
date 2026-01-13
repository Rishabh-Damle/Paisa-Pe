import express from "express";
import Router from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { UserModel } from "../db.js";
import { JWT_SECRET } from "../config.js";
import { userAuth } from "../middlwares/userAuth.js";
import type { IGetUserAuthInfoRequest } from "../types/express/index.js";
export const userRouter = Router();

userRouter.use(express.json());
userRouter.post("/signup", async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  if (!username || !password || !firstName || !lastName) {
    res.status(404).json({
      Error: `please add all the credentials, that all are neccsesarry`,
    });
    return;
  }

  const requiredBody = z.object({
    username: z.string().toLowerCase().min(5),
    password: z
      .string()
      .min(8)
      .max(16)
      .regex(/[A-Z]/, "Must contain atleast one upercase later")
      .regex(/[a-z]/, "Must contain atleast one lowercase later")
      .regex(/[#?!@$%^&*-]/, "Must contain atleast one special character"),
    firstName: z.string().min(5).max(100),
    lastName: z.string().min(5).max(100),
  });

  const parsedDataWithSuccsess = requiredBody.safeParse(req.body);
  if (!parsedDataWithSuccsess.success) {
    res.status(404).json({
      Message: `Bad format to enter, please make sure you are using right format`,
      Error: parsedDataWithSuccsess.error,
    });
  }

  const exisitingUser = await UserModel.findOne({
    username,
  });

  if (exisitingUser) {
    res.status(411).json({ Message: "User allready exists" });
    return;
  }

  const hasshedPassword = await bcrypt.hash(password, 10);

  try {
    await UserModel.create({
      username,
      password: hasshedPassword,
      firstName,
      lastName,
    });
  } catch (error) {
    res.status(404).json({
      Error: `error occured while interacting with the database`,
      error,
    });
  }
  res.status(200).json({ Message: `Signed up succsessfully` });
});

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    username,
  });
  if (!user) {
    res.status(200).json({
      Message:
        "You are not signed up, please make sure to signup before signin",
    });
    return;
  }

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (!passwordMatched) {
    res.status(200).json({
      Message: "Please make sure to use right password, your password is wrong",
    });
    return;
  }

  const token = jwt.sign({ userId: user._id.toString() }, JWT_SECRET);

  res.status(200).json({
    Message: `Signed up succsessfully`,
    Token: token,
  });
});

userRouter.put(
  "/updateInfo",
  userAuth,
  async (req: IGetUserAuthInfoRequest, res) => {
    const userId = req.userId;
    const updateBody = z.object({
      password: z.string().optional(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    });
    const parsedDataWithSuccsess = updateBody.safeParse(req.body);
    if (!parsedDataWithSuccsess.success) {
      res.status(401).json({
        Message: `Error while updating information`,
        Error: parsedDataWithSuccsess.error,
      });
    }

    await UserModel.updateOne({ userId }, req.body);
    res.status(200).json({
      Message: `Information updated succsessfully`,
    });
  }
);

userRouter.get("/getUsersInfo", userAuth, async (req, res) => {
  const { firstName, lastName } = req.body;
  const users = await UserModel.find({
    $or: [{ firstName: firstName }, { lastName: lastName }],
  });

  if (!users) {
    res.status(404).json({
      Message: "Error while fetching users from DB",
    });
  }

  res.status(200).json({
    User: users.map((user) => ({
      username: user.username,
      firstname: user.firstName,
      lastName: user.lastName,
    })),
  });
});
