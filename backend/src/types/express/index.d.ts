// Source - https://stackoverflow.com/a
// Posted by Akshar Patel
// Retrieved 2026-01-11, License - CC BY-SA 3.0

import { Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  userId?: string; // or any other type
}
