import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import validateResult from "../middlewares/validator.middleware";

export const validateDataCategory = [
  check("name").exists().notEmpty().trim().isString(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateUpdateDataCategory = [
  check("name").exists().notEmpty().trim().isString(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateDataRegister = [
  check("name").exists().notEmpty().isString(),
  check("lastName").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isString(),
  check("password").exists().notEmpty().isString(),
  check("city").exists().notEmpty().isString(),
  check("age").exists().notEmpty().isNumeric(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateUpdateDataRegister = [
  check("name").optional().exists().notEmpty().isString(),
  check("lastName").optional().exists().notEmpty().isString(),
  check("email").optional().exists().notEmpty().isEmail(),
  check("password").optional().exists().notEmpty().isString(),
  check("city").optional().exists().notEmpty().isString(),
  check("age").optional().exists().notEmpty().isNumeric(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateDataLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateDataProducts = [
  check("name").exists().notEmpty().isString(),
  check("price").exists().notEmpty().isNumeric(),
  check("description").exists().notEmpty().isString(),
  check("image").exists().notEmpty().isString(),
  check("categoryId").exists().notEmpty().isNumeric(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];

export const validateUpdateDataProducts = [
  check("name").optional().exists().notEmpty().isString(),
  check("price").optional().exists().notEmpty().isNumeric(),
  check("description").optional().exists().notEmpty().isString(),
  check("image").optional().exists().notEmpty().isString(),
  check("categoryId").optional().exists().notEmpty().isNumeric(),
  (req: Request, resp: Response, next: NextFunction) =>
    validateResult(req, resp, next),
];
