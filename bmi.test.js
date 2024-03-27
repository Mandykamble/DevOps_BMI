const request = require("supertest");
const app = require("./bmi-calculator");

describe("BMI Calculator API", () => {
  it("should calculate BMI correctly", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ weight: 70, height: 1.75 });
    expect(response.status).toBe(200);
    expect(response.body.bmi).toBeCloseTo(22.86, 2);
  });

  it("should handle missing weight or height", async () => {
    let response = await request(app).post("/calculate").send({ weight: 70 });
    expect(response.status).toBe(400);

    response = await request(app).post("/calculate").send({ height: 1.75 });
    expect(response.status).toBe(400);
  });
});
