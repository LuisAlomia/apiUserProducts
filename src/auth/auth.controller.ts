import { Request, Response } from "express";
import { matchedData } from "express-validator";

import * as AuthserServices from "./auth.services";

export const create = async (req: Request, resp: Response): Promise<void> => {
  const body = Object(matchedData(req));

  try {
    const user = await AuthserServices.create(body);
    resp.status(201).json(user);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, resp: Response): Promise<void> => {
  const body = Object(matchedData(req));

  try {
    const user = await AuthserServices.login(body);
    resp.status(200).json(user);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};
