import express, { Application } from "express";
import passport from "passport";
import cors from "cors";

import { config } from "./config/env.config";
import { databaseRun } from "./database/connectDb";
import { relationInit } from "./models/relationalModel.model";
import jwtStrategy from "./middlewares/authUser.middleware";
import { router as userRouter } from "./users/user.route";
import { router as productRouter } from "./products/product.route";
import { router as authRouter } from "./auth/auth.route";
import { router as categoryRouter } from "./categories/category.route";

const app: Application = express();
const port: number | string = config.port;

//Middlewares
app.use(express.json());
app.use(cors());
passport.use(jwtStrategy);

//Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

//Data base
databaseRun();
relationInit();

//server
app.listen(port, () => {
  console.log(`SERVER IN PORT: ${port}`);
});
