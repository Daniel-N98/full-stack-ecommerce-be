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
  const {
    username,
    email,
    img_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  } = body;
  if (!username || !email) {
    return Promise.reject({ code: 400, message: "Invalid body" });
  }

  const results = await db.query(
    `INSERT INTO users (username, email, img_url) VALUES ($1, $2, $3) RETURNING *;`,
    [username, email, img_url]
  );

  return results.rows;
};

const patchUser = async (user_id, body) => {
  const { username, email, img_url } = body;
  if (!username && !email && !img_url) {
    return Promise.reject({ code: 400, message: "Invalid body" });
  }
  let fields = "SET ";
  if (username) {
    fields += `username='${username}'`;
  }
  if (email) {
    fields += (username ? ", " : "") + `email='${email}'`;
  }
  if (img_url) {
    fields += (username || email ? ", " : "") + `img_url='${img_url}'`;
  }
  console.log(fields);
  const results = await db.query(
    `UPDATE users ${fields} WHERE user_id = ${user_id} RETURNING *;`
  );
  return results.rows;
};

export { fetchUsers, fetchUserByID, postUser, patchUser };
