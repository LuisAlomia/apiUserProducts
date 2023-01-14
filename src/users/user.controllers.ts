import { Request, Response } from "express";
import * as UserServices from "./user.services";

export const getAll = async (req: Request, resp: Response) => {
  try {
    const users = await UserServices.getAll();
    resp.status(200).json(users);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const getOne = async (req: Request, resp: Response) => {
  const { userId } = req.params;

  try {
    const user = await UserServices.getOne(userId);
    user
      ? resp.status(200).json(user)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const create = async (req: Request, resp: Response) => {
  const { body } = req;

  try {
    const user = await UserServices.create(body);
    resp.status(201).json(user);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const update = async (req: Request, resp: Response) => {
  const { body } = req;
  const { userId } = req.params;

  try {
    const user = await UserServices.update(userId, body);
    user
      ? resp.status(200).json(user)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const destroy = async (req: Request, resp: Response) => {
  const { userId } = req.params;

  try {
    const user = await UserServices.destroy(userId);
    user
      ? resp.status(200).json(user)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};
