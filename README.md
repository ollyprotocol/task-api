# Task API

A simple RESTful API for managing tasks. This API allows you to retrieve a list of tasks and add new tasks, with basic validation and error handling implemented. It is built with Node.js and Express.

## Endpoints

### GET /tasks
Retrieve a list of all tasks.

**Request:**
```http
GET /tasks HTTP/1.1
Host: localhost:3000
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Complete API Task",
    "description": "Build and test the RESTful API"
  },
  {
    "id": 2,
    "title": "Review Code",
    "description": "Check for bugs and optimize performance"
  }
]
```

### POST /tasks
Add a new task.

**Request:**
```http
POST /tasks HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "title": "New Task",
  "description": "This is a new task description"
}
```

**Response (201 Created):**
```json
{
  "id": 4,
  "title": "New Task",
  "description": "This is a new task description"
}
```

**Error (400 Bad Request):**
```json
{
  "error": "Title and description are required"
}
```

## Error Handling
If any required fields (title, description) are missing in the request body, the API will return a 400 Bad Request error with a specific error message.

---

## Dependencies

- **express** - Web framework for Node.js
- **cors** - Middleware to enable cross-origin requests
- **supertest** - Testing library for HTTP assertions
- **jest** - Testing framework for running tests
- **nodemon** - Utility to automatically restart the server during development

## Environment Variables

If you need to customize your environment (e.g., port number), you can add the following environment variables to your `.env` file:

- `PORT=3000` - The port the server will listen on (default is 3000)

## Running Tests

To run the automated tests for the API, use the following command:

```sh
npm test
```

This will run all tests and output the results to the terminal. Tests include checking the functionality of API endpoints, validation, and error handling.

## API Versioning

This API uses versioning to ensure backward compatibility. The current version is `v1`.

Example request to the versioned endpoint:
```http
GET /tasks/v1
```

Future versions may include additional functionality or changes that are not compatible with previous versions.

## Example Usage

You can use this API to integrate task management into your application. For example, you could:

- Fetch a list of tasks for a to-do app
- Add new tasks via a form submission

