import { v4 as uuid } from "uuid";
import { Product, UpdateProduct } from "./product.entity";
import { Product as ProductModel } from "../models/product.model";

export const getAll = async () => {
  const products = await ProductModel.findAll();
  return products;
};

export const getOne = async (productId: string) => {
  const products = await ProductModel.findOne({ where: { id: productId } });
  return products;
};

export const create = async (product: Product) => {
  const newProduct = await ProductModel.create({
    id: uuid(),
    ...product,
  });
  return newProduct;
};

export const update = async (productId: string, product: UpdateProduct) => {
  const updateProduct = await ProductModel.update(product, {
    where: { id: productId },
  });
  return updateProduct;
};

export const destroy = async (productId: string) => {
  const product = await ProductModel.destroy({ where: { id: productId } });
  return product;
};
