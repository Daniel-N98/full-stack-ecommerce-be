import db from "../db/connection.js";

const fetchItems = async () => {
  const results = await db.query("SELECT * FROM items");
  return results.rows;
};

const fetchItemsByUserID = async (user_id, query) => {
  const validFields = ["cost", "quantity", "name"];
  const { order, sort_by, limit = 5 } = query;
  if (
    (sort_by && !validFields.includes(sort_by)) ||
    (order && !["ASC", "DESC"].includes(order))
  ) {
    return Promise.reject({ code: 400, message: "Invalid query" });
  }
  const results = await db.query(
    `SELECT * FROM items WHERE user_id = ${user_id} ORDER BY 
      ${sort_by ? sort_by : "item_id"} ${order ? order : "ASC"}
      LIMIT ${limit}`
  );
  return results.rows;
};

const fetchItemByID = async (user_id, item_id) => {
  const results = await db.query(
    `SELECT * FROM items WHERE user_id = ${user_id} AND item_id = ${item_id}`
  );
  return results.rows;
};

const fetchItemsByCategoryID = async (category_id) => {
  const results = await db.query(
    `SELECT * FROM items WHERE category_id = ${category_id}`
  );
  console.log(results.rows, "rows");

  return results.rows;
};

export {
  fetchItems,
  fetchItemsByUserID,
  fetchItemByID,
  fetchItemsByCategoryID,
};
