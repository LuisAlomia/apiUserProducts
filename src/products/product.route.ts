import { Router } from "express";
import passport from "passport";

import * as ProductControllers from "./product.controller";
import authRole from "../middlewares/authRole.middleware";
import {
  validateDataProducts,
  validateUpdateDataProducts,
} from "../validate/validate";

const authUser = passport.authenticate("jwt", { session: false });

export const router: Router = Router();

router
  .route("/")
  .get(ProductControllers.getAll)
  .post(
    authUser,
    authRole(["administrator"]),
    validateDataProducts,
    ProductControllers.create
  );

router
  .route("/:productId")
  .get(ProductControllers.getOne)
  .patch(
    authUser,
    authRole(["administrator"]),
    validateUpdateDataProducts,
    ProductControllers.update
  )
  .delete(authUser, authRole(["administrator"]), ProductControllers.destroy);
