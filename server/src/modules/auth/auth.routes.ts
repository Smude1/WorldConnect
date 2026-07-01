import { Router } from "express";
import { login, logout, refresh, register, getCurrentUser } from "./auth.controller";
import { authenticate } from "../../middleware/auth.middleware";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", authenticate, getCurrentUser);
authRouter.post("/logout", authenticate, logout);
authRouter.post("/refresh", refresh);

export default authRouter;
