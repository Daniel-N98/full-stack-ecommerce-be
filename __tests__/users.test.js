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
