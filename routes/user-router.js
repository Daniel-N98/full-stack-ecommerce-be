import { Router } from "express";
import {
  getUserByID,
  getUsers,
  insertUser,
} from "../controllers/user-controller.js";
const userRouter = Router();

userRouter.route("/").get(getUsers).post(insertUser);
userRouter.get("/:user_id", getUserByID);

export { userRouter };
