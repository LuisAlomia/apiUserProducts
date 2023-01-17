import * as jwt from "jsonwebtoken";

import { Role } from "../users/user.entity";
import { config } from "../config/env.config";

export const createToken = (id: string, role: Role): string => {
  return jwt.sign({ id, role }, config.secretKey);
};

export const veryfyToken = (token: string): string | jwt.JwtPayload => {
  return jwt.verify(token, config.secretKey);
};
