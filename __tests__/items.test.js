import db from "../db/connection.js";
import request from "supertest";
import seed from "../db/data/seeds/seed.js";
import app from "../app.js";
import testData from "../db/data/test-data/index.js";

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("GET /items", () => {
  test("Status: 200, returns an array", async () => {
    const { body } = await request(app).get("/items/3").expect(200);
    expect(Array.isArray(body.items)).toBe(true);
  });
  test("Status: 200, returns the users items", async () => {
    const { body } = await request(app).get("/items/3").expect(200);
    const { items } = body;
    expect(items[0]).toEqual({
      item_id: 1,
      user_id: 3,
      name: "In",
      description:
        "egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
      preview_url: "https://facebook.com/en-us",
      cost: 131,
      quantity: 7,
    });
    expect(items[1]).toEqual({
      item_id: 9,
      user_id: 3,
      name: "vehicula.",
      description:
        "per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.",
      preview_url: "https://youtube.com/sub",
      cost: 257,
      quantity: 4,
    });
  });
});

describe("GET /items?order", () => {
  test("Status: 200, sorts items by item_id (default) in ascending order", async () => {
    const { body } = await request(app).get("/items/3?order=ASC").expect(200);
    expect(body.items).toBeSortedBy("item_id", {
      descending: false,
    });
  });
});
