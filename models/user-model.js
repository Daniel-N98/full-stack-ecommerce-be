import db from "../db/connection.js";

const fetchUsers = async () => {
  const results = await db.query("SELECT * FROM users");
  return results.rows;
};

const fetchUserById = async (user_id) => {
  const results = await db.query(
    `SELECT * FROM users WHERE user_id = ${user_id}`
  );
  return results.rows;
};

export { fetchUsers, fetchUserById };
