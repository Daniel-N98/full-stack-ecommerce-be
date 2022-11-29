import {
  fetchItems,
  fetchItemByID,
  fetchItemsByCategoryID,
} from "../models/items-model.js";

const getItems = (request, response, next) => {
  fetchItems(request.params.user_id, request.query)
    .then((items) => {
      response.status(200).send({ items });
    })
    .catch((error) => next(error));
};

const getItemByID = (request, response, next) => {
  fetchItemByID(request.params.user_id, request.params.item_id)
    .then((item) => {
      response.status(200).send({ item });
    })
    .catch((error) => next(error));
};

const getItemsByCategory = (request, response, next) => {
  fetchItemsByCategoryID(request.params.category_id)
    .then((items) => {
      response.status(200).send({ items });
    })
    .catch((error) => next(error));
};

export { getItems, getItemByID, getItemsByCategory };
