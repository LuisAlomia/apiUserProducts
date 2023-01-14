import { v4 as uuid } from "uuid";
import { User, UpdateUser } from "./user.entity";
import { User as UserModel } from "../models/user.model";

export const getAll = async () => {
  const users = await UserModel.findAll();
  return users;
};

export const getOne = async (userId: string) => {
  const user = await UserModel.findOne({ where: { id: userId } });
  return user;
};

export const create = async (user: User) => {
  const newUser = await UserModel.create({
    id: uuid(),
    ...user,
  });
  return newUser;
};

export const update = async (userId: string, user: UpdateUser) => {
  const updateUser = await UserModel.update(user, { where: { id: userId } });
  return updateUser;
};

export const destroy = async (userId: string) => {
  const user = await UserModel.destroy({ where: { id: userId } });
  return user;
};
