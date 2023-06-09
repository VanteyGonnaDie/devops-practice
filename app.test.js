const app = require("./app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
    return
});