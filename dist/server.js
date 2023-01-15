"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_config_1 = require("./config/env.config");
const connectDb_1 = require("./database/connectDb");
const user_route_1 = require("./users/user.route");
const product_route_1 = require("./products/product.route");
const app = (0, express_1.default)();
const port = env_config_1.config.port;
//Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes
app.use("/users", user_route_1.router);
app.use("/products", product_route_1.router);
(0, connectDb_1.databaseRun)();
app.listen(port, () => {
    console.log(`SERVER IN PORT: ${port}`);
});
