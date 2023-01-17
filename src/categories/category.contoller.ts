import { Request, Response } from "express";
import { matchedData } from "express-validator";

import * as CategoryServices from "./category.services";

export const getAll = async (req: Request, resp: Response) => {
  try {
    const categories = await CategoryServices.getAll();
    resp.status(200).json(categories);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const getOne = async (req: Request, resp: Response) => {
  const { categoryId } = req.params;

  try {
    const category = await CategoryServices.getOne(categoryId);
    category
      ? resp.status(200).json(category)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const create = async (req: Request, resp: Response) => {
  const body = Object(matchedData(req));

  try {
    const category = await CategoryServices.create(body);
    resp.status(201).json(category);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const update = async (req: Request, resp: Response) => {
  const body = Object(matchedData(req));

  const { categoryId } = req.params;

  try {
    const category = await CategoryServices.update(categoryId, body);
    category
      ? resp.status(200).json({ id: categoryId, message: "Updated category" })
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const destroy = async (req: Request, resp: Response) => {
  const { categoryId } = req.params;

  try {
    const category = await CategoryServices.destroy(categoryId);
    category
      ? resp.status(200).json({ id: categoryId, message: "Removed category" })
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};
