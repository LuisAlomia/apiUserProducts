import express, { Application } from "express";
import cors from "cors";

import { config } from "./config/env.config";
import { databaseRun } from "./database/connectDb";
import { router as userRouter } from "./users/user.route";
import { router as productRouter } from "./products/product.route";

const app: Application = express();
const port: number | string = config.port;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/users", userRouter);
app.use("/products", productRouter);

databaseRun();

app.listen(port, () => {
  console.log(`SERVER IN PORT: ${port}`);
});
