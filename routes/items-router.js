import { Router } from "express";
import { getItemByID, getItems } from "../controllers/items-controller.js";
const itemsRouter = Router();

itemsRouter.get("/:user_id", getItems);
itemsRouter.get("/:user_id/:item_id", getItemByID);

export { itemsRouter };
