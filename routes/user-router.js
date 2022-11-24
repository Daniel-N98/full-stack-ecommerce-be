import { Router } from "express";
import {
  getUserByID,
  getUsers,
  insertUser,
  updateUser,
} from "../controllers/user-controller.js";
const userRouter = Router();

userRouter.route("/").get(getUsers).post(insertUser);
userRouter.route("/:user_id").get(getUserByID).patch(updateUser);

export { userRouter };
