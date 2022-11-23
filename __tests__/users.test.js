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
    const user = { username: "NewUser125", email: "NewUser125@gmail.com" };
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
});
