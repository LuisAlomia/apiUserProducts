import { v4 as uuid } from "uuid";
import { Product, UpdateProduct } from "./product.entity";
import { Product as ProductModel } from "../models/product.model";
import { Category } from "../models/category.model";

export const getAll = async (category?: string) => {
  let products: Product[];

  if (category) {
    products = await ProductModel.findAll({
      where: { categoryId: category },
      include: [{ model: Category }],
      attributes: {
        exclude: ["categoryId"],
      },
    });
  } else {
    products = await ProductModel.findAll({
      include: [{ model: Category }],
      attributes: {
        exclude: ["categoryId"],
      },
    });
  }
  return products;
};

export const getOne = async (productId: string) => {
  const products = await ProductModel.findOne({
    where: { id: productId },
    include: [{ model: Category }],
    attributes: {
      exclude: ["categoryId"],
    },
  });
  return products;
};

export const create = async (product: Product) => {
  const newProduct = await ProductModel.create({
    id: uuid(),
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
    categoryId: product.categoryId,
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
