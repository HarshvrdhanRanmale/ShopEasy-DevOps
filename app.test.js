const request = require("supertest");
const app = require("./app");

describe("ShopEasy API", () => {
  test("homepage should respond successfully", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("ShopEasy");
  });

  test("products endpoint should return products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].name).toBe("Laptop");
  });

  test("health endpoint should report UP", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });
});
