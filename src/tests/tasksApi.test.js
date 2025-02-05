import request from "supertest";
import app from "../app.js"; // Assuming your app.js file exports the Express app

describe("Task API", () => {
  // Test GET /tasks route
  it("should return a list of tasks", async () => {
    const response = await request(app).get("/tasks/v1"); // Use the appropriate version of your endpoint
    expect(response.status).toBe(200); // Ensure the status is 200 OK
    expect(response.body).toBeInstanceOf(Array); // Check if the response body is an array
    expect(response.body.length).toBeGreaterThan(0); // Ensure the list is not empty
  });

  // Test POST /tasks route
  it("should add a new task", async () => {
    const newTask = {
      title: "Test Task",
      description: "This is a test task for API testing",
    };

    const response = await request(app)
      .post("/tasks/v1") // Use the appropriate version of your endpoint
      .send(newTask); // Send the data in the request body

    expect(response.status).toBe(201); // Ensure the status is 201 Created
    expect(response.body).toHaveProperty("id"); // Ensure the task has an id
    expect(response.body.title).toBe(newTask.title); // Check if the title matches
    expect(response.body.description).toBe(newTask.description); // Check if the description matches
  });

  // Test POST /tasks route with missing fields
  it("should return a 400 error for missing fields", async () => {
    const incompleteTask = {
      title: "Incomplete Task",
    };

    const response = await request(app)
      .post("/tasks/v1")
      .send(incompleteTask);

    expect(response.status).toBe(400); // Expect 400 Bad Request
    expect(response.body).toHaveProperty("errors"); // Ensure the response has an "errors" array

    // Check specific error messages
    const descriptionError = response.body.errors.find(
      (err) => err.path === "description"
    );
    expect(descriptionError).toBeDefined(); // Ensure there's an error for "description"
    expect(descriptionError.msg).toBe("Description is required");
  });
});
