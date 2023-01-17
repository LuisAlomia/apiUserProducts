import { Router } from "express";
import passport from "passport";

import * as UserControllers from "./user.controllers";
import authRole from "../middlewares/authRole.middleware";

const authUser = passport.authenticate("jwt", { session: false });

export const router: Router = Router();

router.route("/").get(UserControllers.getAll);

router
  .route("/:userId")
  .get(UserControllers.getOne)
  .patch(authUser, authRole(["administrator"]), UserControllers.update)
  .delete(authUser, authRole(["administrator"]), UserControllers.destroy);
