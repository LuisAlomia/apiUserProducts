import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validateResult = (req: Request, resp: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    resp.status(403).json({ message: err.array() });
  }
};

export default validateResult;
