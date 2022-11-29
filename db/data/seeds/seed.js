import format from "pg-format";
import db from "../../connection.js";

const seed = async ({ users, items, categories }) => {
  await db.query("DROP TABLE IF EXISTS users cascade;");
  await db.query("DROP TABLE IF EXISTS items cascade;");
  await db.query("DROP TABLE IF EXISTS categories cascade;");

  await db.query(`CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    email VARCHAR(30) NOT NULL,
    img_url TEXT NOT NULL
    );`);

  await db.query(`CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(16) NOT NULL
    );`);

  await db.query(`CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    preview_url VARCHAR(30),
    cost INT NOT NULL,
    quantity INT NOT NULL,
    category_id INT REFERENCES categories(category_id) ON DELETE CASCADE
  );`);

  const insertUsers = format(
    "INSERT INTO users (username, email, img_url) VALUES %L RETURNING *;",
    users.map(({ username, email, img_url }) => [username, email, img_url])
  );

  const usersPromise = db.query(insertUsers).then((result) => result.rows);
  await Promise.all([usersPromise]);

  const insertCategories = format(
    "INSERT INTO categories (name) VALUES %L RETURNING *;",
    categories.map(({ name }) => [name])
  );
  const categoriesPromise = db
    .query(insertCategories)
    .then((result) => result.rows);
  await Promise.all([categoriesPromise]);

  const insertItems = format(
    "INSERT INTO items (user_id, name, description, preview_url, cost, quantity, category_id) VALUES %L RETURNING *;",
    items.map(
      ({
        user_id,
        name,
        description,
        preview_url,
        cost,
        quantity,
        category_id,
      }) => [
        user_id,
        name,
        description,
        preview_url,
        cost,
        quantity,
        category_id,
      ]
    )
  );

  const itemsPromise = db.query(insertItems).then((result) => result.rows);

  await Promise.all([itemsPromise]);
};

export default seed;
