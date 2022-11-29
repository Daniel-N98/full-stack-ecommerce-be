import { Router } from "express";
import {
  getItemByID,
  getItems,
  getItemsByCategory,
  getItemsByUserID,
} from "../controllers/items-controller.js";
const itemsRouter = Router();

itemsRouter.get("/", getItems);
itemsRouter.get("/category/:category_id", getItemsByCategory);
itemsRouter.get("/:user_id", getItemsByUserID);
itemsRouter.get("/:user_id/:item_id", getItemByID);

export { itemsRouter };
