import format from "pg-format";
import db from "../../connection.js";

const seed = async ({ users, items }) => {
  await db.query("DROP TABLE IF EXISTS users cascade;");
  await db.query("DROP TABLE IF EXISTS items cascade;");

  await db.query(`CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    email VARCHAR(30)
    );`);

  await db.query(`CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    preview_url VARCHAR(30),
    cost INT NOT NULL,
    quantity INT NOT NULL
  );`);

  const insertUsers = format(
    "INSERT INTO users (username, email) VALUES %L RETURNING *;",
    users.map(({ username, email }) => [username, email])
  );

  const usersPromise = db.query(insertUsers).then((result) => result.rows);
  await Promise.all([usersPromise]);

  const insertItems = format(
    "INSERT INTO items (user_id, name, description, preview_url, cost, quantity) VALUES %L RETURNING *;",
    items.map(
      ({ owner_id, name, description, preview_url, cost, quantity }) => [
        owner_id,
        name,
        description,
        preview_url,
        cost,
        quantity,
      ]
    )
  );

  const itemsPromise = db.query(insertItems).then((result) => result.rows);

  await Promise.all([itemsPromise]);
};

export default seed;
