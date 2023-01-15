import { Request, Response } from "express";
import * as ProductServices from "./product.services";

export const getAll = async (req: Request, resp: Response) => {
  try {
    const products = await ProductServices.getAll();
    resp.status(200).json(products);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const getOne = async (req: Request, resp: Response) => {
  const { productId } = req.params;

  try {
    const product = await ProductServices.getOne(productId);
    product
      ? resp.status(200).json(product)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const create = async (req: Request, resp: Response) => {
  const { body } = req;

  try {
    const product = await ProductServices.create(body);
    resp.status(201).json(product);
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const update = async (req: Request, resp: Response) => {
  const { body } = req;
  const { productId } = req.params;

  try {
    const product = await ProductServices.update(productId, body);
    product
      ? resp.status(200).json(product)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};

export const destroy = async (req: Request, resp: Response) => {
  const { productId } = req.params;

  try {
    const product = await ProductServices.destroy(productId);
    product
      ? resp.status(200).json(product)
      : resp.status(404).json({ message: "Invalid ID" });
  } catch (err: any) {
    resp.status(400).json({ message: err.message });
  }
};
