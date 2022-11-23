import { Router } from "express";
import { getUserByID, getUsers } from "../controllers/user-controller.js";
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:user_id", getUserByID);

export { userRouter };
