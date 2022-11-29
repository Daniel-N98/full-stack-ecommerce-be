import db from "../db/connection.js";
import request from "supertest";
import seed from "../db/data/seeds/seed.js";
import app from "../app.js";
import testData from "../db/data/test-data/index.js";

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("GET /users", () => {
  test("Status: 200, returns an array", async () => {
    const { body } = await request(app).get("/users").expect(200);
    expect(Array.isArray(body.users)).toBe(true);
  });
});

describe("POST /users", () => {
  test("Status: 201, returns the inserted user", async () => {
    const user = {
      username: "NewUser125",
      email: "NewUser125@gmail.com",
      img_url:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    };
    const { body } = await request(app).post("/users").send(user).expect(201);
    expect(body.user[0]).toEqual({ user_id: expect.any(Number), ...user });
  });

  test("Status: 201, inserts the user into the database", async () => {
    const user = { username: "NewUser125", email: "NewUser125@gmail.com" };
    await request(app).post("/users").send(user);
    const results = await db.query(
      `SELECT * FROM users WHERE username = $1 AND email = $2`,
      [user.username, user.email]
    );
    expect(results.rowCount).toBe(1);
  });

  test("Status: 400, handles error the the user object does not contain both a username, and an email", async () => {
    const user = { username: "NewUser125" };
    const { body } = await request(app).post("/users").send(user).expect(400);
    expect(body.message).toBe("Invalid body");
  });

  test("Status: 400, handles error the the user object does not contain both a username, and an email", async () => {
    const user = { email: "NewUser125@gmail.com" };
    const { body } = await request(app).post("/users").send(user).expect(400);
    expect(body.message).toBe("Invalid body");
  });
});

describe("PATCH /users/:user_id", () => {
  test("Status: 200, returns the updated user with the username changed", async () => {
    const user = {
      username: "UpdatedUser125",
    };
    const { body } = await request(app)
      .patch("/users/1")
      .send(user)
      .expect(200);
    expect(body.user[0].username).toEqual(user.username);
  });

  test("Status: 200, returns the updated user with the email changed", async () => {
    const user = {
      email: "UpdatedUser125@gmail.com",
    };
    const { body } = await request(app)
      .patch("/users/1")
      .send(user)
      .expect(200);
    expect(body.user[0].email).toEqual(user.email);
  });

  test("Status: 200, returns the updated user with the username, email and img_url changed", async () => {
    const user = {
      username: "UpdatedUser125",
      email: "UpdatedUser125@gmail.com",
      img_url:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    };
    const { body } = await request(app)
      .patch("/users/1")
      .send(user)
      .expect(200);
    expect(body.user[0]).toEqual({ user_id: 1, ...user });
  });

  test("Status: 400, handles error when invalid properties are missing", async () => {
    const user = {};
    const { body } = await request(app)
      .patch("/users/1")
      .send(user)
      .expect(400);
    expect(body.message).toBe("Invalid body");
  });
});
