import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { LoginReq } from "../interfaces/User";
import { SignupReq } from "../interfaces/User";
import { createUser, getUserByUsername } from "../services/user.service";

const login = async (req: Request<{}, {}, LoginReq>, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
    );

    res.json({
      token,
    });
  } catch {
    res.status(500).json({
      message: "Login failed",
    });
  }
};

const signup = async (req: Request<{}, {}, SignupReq>, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required",
      });
    }

    const existing = await getUserByUsername(username);

    if (existing) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await createUser({
      username,
      passwordHash,
      role: "USER",
    });

    res.status(201).json({
      message: "Account created",
    });
  } catch {
    res.status(500).json({
      message: "Signup failed",
    });
  }
};

export { signup, login };
