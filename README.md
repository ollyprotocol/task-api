

# Task API

The **Task API** is a simple RESTful API for managing tasks. It allows users to:  

- Retrieve a list of tasks.  
- Add new tasks with basic validation and error handling.  

This API is built using **Node.js** and **Express** and is designed to be easily extendable.  

---

## Endpoints  

### GET /tasks  

Retrieve a list of all tasks.  

#### URL:  
```
http://localhost:3000/tasks/v1
```

#### Request:  
```http
GET /tasks/v1 HTTP/1.1  
Host: localhost:3000  
```  

#### Response (200 OK):  
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

---

### POST /tasks  

Add a new task.  

#### URL:  
```
http://localhost:3000/tasks/v1
```  

#### Request:  
```http
POST /tasks/v1 HTTP/1.1  
Host: localhost:3000  
Content-Type: application/json  

{
  "title": "New Task",
  "description": "This is a new task description"
}
```  

#### Response (201 Created):  
```json
{
  "id": 4,
  "title": "New Task",
  "description": "This is a new task description"
}
```  

#### Error (400 Bad Request):  
If required fields (`title`, `description`) are missing:  
```json
{
  "error": "Title and description are required"
}
```  

---

## Error Handling  

The API validates input fields for required parameters. If any are missing, the server responds with a **400 Bad Request** error, providing a clear and concise error message.  

---

## Setup and Installation  

Follow these steps to set up and run the API:  

1. **Clone the repository:**  
   ```sh
   git clone <repository-url>
   ```  

2. **Navigate to the project directory:**  
   ```sh
   cd task-api
   ```  

3. **Install dependencies:**  
   ```sh
   npm install
   ```  

4. **Start the server:**  
   - For development with auto-reload:  
     ```sh
     nodemon src/server.js
     ```  
   - For production:  
     ```sh
     node src/server.js
     ```  

By default, the server runs at:  
```
http://localhost:3000
```  

---

## Dependencies  

This project uses the following dependencies:  

- **express**: Web framework for building RESTful APIs.  
- **cors**: Middleware to enable cross-origin requests.  
- **supertest**: Testing library for HTTP assertions.  
- **jest**: Testing framework for test execution.  
- **nodemon**: Utility for live-reloading the server during development.  

---

## Environment Variables  

Customize the API configuration using a `.env` file. The following environment variable is available:  

- **`PORT`**: Specifies the server's port (default is 3000).  

Example `.env` file:  
```
PORT=3000
```  

---

## Running Tests  

Run automated tests to verify the API’s functionality:  

```sh
npm test
```  

Tests include:  
- Validating API endpoint responses.  
- Checking required field validation.  
- Ensuring proper error handling.  

---

## API Versioning  

The API supports versioning to maintain backward compatibility. The current version is **`v1`**.  

#### Example Request to Versioned Endpoint:  
```http
GET /tasks/v1
```  

Future versions will include additional features or breaking changes while preserving older functionality.  

---

## Example Usage  

Integrate the Task API into your applications to manage tasks. Here are some examples:  

- **To-Do App**: Use the API to fetch and display tasks in a to-do list.  
- **Task Creation**: Allow users to add tasks using a form submission.  
- **Task Tracker**: Integrate the API into a project management tool.  
