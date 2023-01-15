import { Router } from "express";
import * as ProductControllers from "./product.controller";

export const router = Router();

router
  .route("/")
  .get(ProductControllers.getAll)
  .post(ProductControllers.create);

router
  .route("/:productId")
  .get(ProductControllers.getOne)
  .patch(ProductControllers.update)
  .delete(ProductControllers.destroy);
