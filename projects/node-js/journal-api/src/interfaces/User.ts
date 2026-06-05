export interface User {
  username: string;
  passwordHash: string;
  role: "USER" | "ADMIN";
}

export interface LoginReq {
  username: string;
  password: string;
}

export interface SignupReq {
  username: string;

  password: string;
}

export interface JwtPayload {
  userId: string;
  username: string;
}
