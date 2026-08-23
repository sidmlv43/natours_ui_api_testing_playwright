import { User } from "./user";

export const USERS: Record<string, User> = {
  admin: {
    email: "admin@natours.io",
    password: "test1234",
    role: "ADMIN",
  },

  user: {
    email: "sophie@example.com",
    password: "test1234",
    role: "USER",
  },
};
