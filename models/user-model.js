import { string } from "pg-format";
import db from "../db/connection.js";

const fetchUsers = async () => {
  const results = await db.query("SELECT * FROM users");
  return results.rows;
};

const fetchUserByID = async (user_id) => {
  const results = await db.query(
    `SELECT * FROM users WHERE user_id = ${user_id}`
  );
  return results.rows;
};

const postUser = async (body) => {
  const { username, email } = body;

  const results = await db.query(
    `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;`,
    [username, email]
  );

  return results.rows;
};

export { fetchUsers, fetchUserByID, postUser };
