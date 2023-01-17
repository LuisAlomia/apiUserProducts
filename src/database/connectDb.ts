import { Sequelize } from "sequelize";

import { config } from "../config/env.config";

export const sequelize = new Sequelize({
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  port: config.db.port,
  dialect: "postgres",
});

export const databaseRun = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("CONNECT");
    await sequelize.sync();
    console.log("SYNC");
  } catch (err) {
    console.log(err);
  }
};
