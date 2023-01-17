import dotenv from "dotenv";
dotenv.config();

const dbPort = Number(process.env.DB_PORT);

export const config = {
  port: process.env.PORT || 9000,
  db: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_DATABASE || "index",
    host: process.env.DB_HOST || "localhost",
    port: dbPort || 5433,
  },
  secretKey: process.env.JWT_secretKey || "secretKey",
};
