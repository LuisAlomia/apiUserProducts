import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface Product
  extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  id?: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface UpdateProduct {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}
