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
  if (!username || !email) {
    return Promise.reject({ code: 400, message: "Invalid body" });
  }

  const results = await db.query(
    `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *;`,
    [username, email]
  );

  return results.rows;
};

const patchUser = async (user_id, body) => {
  const { username, email } = body;
  if (!username && !email) {
    return Promise.reject({ code: 400, message: "Invalid body" });
  }
  let fields = "SET ";
  if (username) {
    fields += `username='${username}'`;
  }
  if (email) {
    fields += (username ? ", " : "") + `email='${email}'`;
  }
  console.log(fields);
  const results = await db.query(
    `UPDATE users ${fields} WHERE user_id = ${user_id} RETURNING *;`
  );
  return results.rows;
};

export { fetchUsers, fetchUserByID, postUser, patchUser };
