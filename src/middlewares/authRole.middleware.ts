import { Request, Response, NextFunction } from "express";
import { veryfyToken } from "../utils/token.util";

const authRole =
  (role: string[]) =>
  (req: Request, resp: Response, next: NextFunction): void => {
    try {
      const token = req.headers.authorization?.split(" ").pop();

      const user = Object(veryfyToken(token!));

      const checkRole = role.some((rol) => user.role.includes(rol));

      if (!checkRole) {
        resp.status(401).json({ message: "Unauthorized user" });
      } else {
        next();
      }
    } catch (error) {
      resp.status(401).json({ message: "Unauthorization" });
    }
  };

export default authRole;
