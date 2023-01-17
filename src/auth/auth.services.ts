import { v4 as uuid } from "uuid";

import { User } from "../users/user.entity";
import { Auth } from "./auth.entity";
import { User as UserModel } from "../models/user.model";
import { encrypt, decrypt } from "../utils/encrypt.util";
import { createToken } from "../utils/token.util";
import { UserDTO } from "./auth.DTO";

export const create = async (user: User): Promise<UserDTO | string> => {
  const checkUser = await UserModel.findOne({
    where: { email: user.email },
  });

  if (checkUser) return "User exist";

  const newUser = await UserModel.create({
    id: uuid(),
    password: encrypt(user.password),
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    city: user.city,
    age: user.age,
  });

  const userDTO = {
    id: newUser.id,
    name: newUser.name,
    lastName: newUser.lastName,
    email: newUser.email,
    role: newUser.role,
    city: newUser.city,
    age: newUser.age,
  };

  return userDTO;
};

export const login = async (user: Auth): Promise<UserDTO | object> => {
  const checkUser = await UserModel.findOne({ where: { email: user.email } });

  if (!checkUser) return { message: "User does´t exist" };

  const userValid = decrypt(user.password, checkUser.password);

  if (userValid === true) {
    const token = createToken(checkUser.id, checkUser.role);

    const userDTO = {
      token,
      id: checkUser.id,
      name: checkUser.name,
      lastName: checkUser.lastName,
      email: checkUser.email,
      role: checkUser.role,
      city: checkUser.city,
      age: checkUser.age,
    };

    return userDTO;
  } else {
    return { message: "Invalid Credentials" };
  }
};
