import express from "express";
import Router from "express";
import type { IGetUserAuthInfoRequest } from "../types/express/index.js";
import { AccountsModel } from "../db.js";
import { userAuth } from "../middlwares/userAuth.js";
import { startSession } from "mongoose";
export const accountRounter = Router();
accountRounter.use(express.json());
accountRounter.get(
  "/balance",
  userAuth,
  async (req: IGetUserAuthInfoRequest, res) => {
    const userId = req.userId;
    const account = await AccountsModel.findOne({
      userId,
    });

    res.status(200).json({
      Balance: account?.balance,
    });
  }
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
      senderUserId,
    });
    if (!senderAccount) {
      return res.status(400).json({ message: "Invalid sender account" });
    }
    const balance = senderAccount.balance ?? 0;
    if (balance < amount) {
      res.status(400).json({ message: "Insufficient balance" });
    }

    const reciverAccount = await AccountsModel.findOne({
      reciverUserId,
    });

    if (!reciverAccount) {
      res.status(400).json({
        message: "Invalid reciver account",
      });
    }

    await AccountsModel.findByIdAndUpdate(
      {
        senderUserId,
      },
      {
        $inc: {
          balance: -amount,
        },
      }
    );

    await AccountsModel.findByIdAndUpdate(
      {
        reciverUserId,
      },
      {
        $inc: {
          balance: amount,
        },
      }
    );

    await session.commitTransaction();
    res.status(200).json({
      Message: "Transfer successful",
    });
  }
);
