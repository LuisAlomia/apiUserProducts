import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface Category
  extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
  id?: number;
  name: string;
}

export interface UpdateCategory {
  id?: number;
  name?: string;
}
