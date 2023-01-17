import { Router } from "express";
import passport from "passport";

import * as CategoryControllers from "./category.contoller";
import authRole from "../middlewares/authRole.middleware";
import {
  validateDataCategory,
  validateUpdateDataCategory,
} from "../validate/validate";

const authUser = passport.authenticate("jwt", { session: false });

export const router: Router = Router();

router
  .route("/")
  .get(CategoryControllers.getAll)
  .post(
    authUser,
    authRole(["administrator"]),
    validateDataCategory,
    CategoryControllers.create
  );

router
  .route("/:categoryId")
  .get(CategoryControllers.getOne)
  .patch(
    authUser,
    authRole(["administrator"]),
    validateUpdateDataCategory,
    CategoryControllers.update
  )
  .delete(authUser, authRole(["administrator"]), CategoryControllers.destroy);
