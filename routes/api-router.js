import { Router } from "express";
import { userRouter } from "./user-router.js";
import { itemsRouter } from "./items-router.js";
const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/items", itemsRouter);

export default apiRouter;
