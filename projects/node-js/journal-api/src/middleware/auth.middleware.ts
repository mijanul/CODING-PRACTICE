import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        username: string;
        role: "USER" | "ADMIN";
      };
    }
  }
}

export {};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const token = header.split(" ")[1];

    req.user = jwt.verify(token, process.env.JWT_SECRET!) as Request["user"];

    next();
  } catch {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};
