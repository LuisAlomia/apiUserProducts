import express, { Application } from "express";
import cors from "cors";

import { config } from "./config/env.config";

export class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = config.port;

    this.listen();
    this.middleware();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`SERVER IN PORT: ${this.port}`);
    });
  }
}
