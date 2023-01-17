import { Category, UpdateCategory } from "./category.entity";
import { Category as CategoryModel } from "../models/category.model";

export const getAll = async () => {
  const category = await CategoryModel.findAll();
  return category;
};

export const getOne = async (categoryId: string) => {
  const categories = await CategoryModel.findOne({ where: { id: categoryId } });
  return categories;
};

export const create = async (category: Category) => {
  const newCategory = await CategoryModel.create({
    name: category.name,
  });
  return newCategory;
};

export const update = async (categoryId: string, category: UpdateCategory) => {
  const updateCategory = await CategoryModel.update(category, {
    where: { id: categoryId },
  });
  return updateCategory;
};

export const destroy = async (categoryId: string) => {
  const category = await CategoryModel.destroy({ where: { id: categoryId } });
  return category;
};
