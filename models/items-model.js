import db from "../db/connection.js";

const fetchItems = async (user_id) => {
  const results = await db.query(
    `SELECT * FROM items WHERE user_id = ${user_id}`
  );
  return results.rows;
};

const fetchItemByID = async (user_id, item_id) => {
  const results = await db.query(
    `SELECT * FROM items WHERE user_id = ${user_id} AND item_id = ${item_id}`
  );
  return results.rows;
};

export { fetchItems, fetchItemByID };
