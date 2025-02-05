# Task API

A simple RESTful API for managing tasks using Node.js and Express.

## Endpoints

- **GET /tasks** - Retrieve all tasks
- **POST /tasks** - Add a new task (Requires `title` and `description` in the request body)

## Setup

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
3. change directory to src where the server.js is located then Start the Server
```sh
nodemon/node server.js
```
By default, the server will run at:
`http://localhost:3000`
4. Error Handling
If any required fields (`title`, `description`) are missing in the request, the server will return a `400 Bad Request` error with a message