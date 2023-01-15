import { Router } from "express";
import * as UserControllers from "./user.controllers";

export const router: Router = Router();

router.route("/").get(UserControllers.getAll).post(UserControllers.create);

router
  .route("/:userId")
  .get(UserControllers.getOne)
  .patch(UserControllers.update)
  .delete(UserControllers.destroy);
