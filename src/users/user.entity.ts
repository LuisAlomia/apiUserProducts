import { Model, InferAttributes, InferCreationAttributes } from "sequelize";

export enum Role {
  "administrator",
  "cashier",
}

export interface User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  city: string;
  age: number;
}

export interface UpdateUser {
  id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
  city?: string;
  age?: number;
}
