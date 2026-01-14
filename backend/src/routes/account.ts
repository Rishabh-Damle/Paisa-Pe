import express from "express";
import Router from "express";
import type { IGetUserAuthInfoRequest } from "../types/express/index.js";
import { AccountsModel } from "../db.js";
export const accountRounter = Router();
accountRounter.use(express.json());
accountRounter.get("/balance", async (req: IGetUserAuthInfoRequest, res) => {
  const userId = req.userId;
  const account = await AccountsModel.findOne({
    userId,
  });

  res.status(200).json({
    Balance: account?.balance,
  });
});
