import express from "express";
import Router from "express";
import type { IGetUserAuthInfoRequest } from "../types/express/index.js";
import { AccountsModel } from "../db.js";
import { userAuth } from "../middlwares/userAuth.js";
import { startSession } from "mongoose";
import mongoose from "mongoose";
export const accountRounter = Router();
accountRounter.use(express.json());
accountRounter.get(
  "/balance",
  userAuth,
  async (req: IGetUserAuthInfoRequest, res) => {
    const userId = req.userId;

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const account = await AccountsModel.findOne({
      user: new mongoose.Types.ObjectId(userId),
    });
    res.status(200).json({
      Balance: account?.balance,
    });
  },
);

accountRounter.post(
  "/transfer",
  userAuth,
  async (req: IGetUserAuthInfoRequest, res) => {
    const session = await startSession();
    session.startTransaction();
    const senderUserId = req.userId;
    const { reciverUserId, amount } = req.body;
    const senderAccount = await AccountsModel.findOne({
      user: new mongoose.Types.ObjectId(senderUserId),
    });
    if (!senderAccount) {
      return res.status(400).json({ message: "Invalid sender account" });
    }
    const balance = senderAccount.balance ?? 0;
    if (balance < amount) {
      res.status(400).json({ message: "Insufficient balance" });
    }

    const reciverAccount = await AccountsModel.findOne({
      user: new mongoose.Types.ObjectId(reciverUserId),
    });

    if (!reciverAccount) {
      res.status(400).json({
        message: "Invalid reciver account",
      });
    }

    await AccountsModel.updateOne(
      { user: new mongoose.Types.ObjectId(senderUserId) },
      { $inc: { balance: -amount } },
    ).session(session);
    await AccountsModel.updateOne(
      { user: new mongoose.Types.ObjectId(reciverUserId) },
      { $inc: { balance: amount } },
    ).session(session);

    await session.commitTransaction();
    res.status(200).json({
      Message: "Transfer successful",
    });
  },
);
