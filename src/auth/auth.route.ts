import { Router } from "express";

import * as AuthControllers from "./auth.controller";
import { validateDataLogin, validateDataRegister } from "../validate/validate";

export const router: Router = Router();

router
  .post("/register", validateDataRegister, AuthControllers.create)
  .post("/login", validateDataLogin, AuthControllers.login);
