import { UpdateUser } from "./user.entity";
import { User as UserModel } from "../models/user.model";
import { encrypt } from "../utils/encrypt.util";

export const getAll = async () => {
  const users = await UserModel.findAll({
    attributes: { exclude: ["password"] },
  });
  return users;
};

export const getOne = async (userId: string) => {
  const user = await UserModel.findOne({
    where: { id: userId },
    attributes: { exclude: ["password"] },
  });
  return user;
};

export const update = async (userId: string, user: UpdateUser) => {
  const updateUser = await UserModel.update(
    {
      password: encrypt(user.password!),
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      city: user.city,
      age: user.age,
    },
    { where: { id: userId } }
  );
  return updateUser;
};

export const destroy = async (userId: string) => {
  const user = await UserModel.destroy({ where: { id: userId } });
  return user;
};
