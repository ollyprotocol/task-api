import express from "express";
import { body, validationResult } from "express-validator";
import { getTasks, addTask } from "../controllers/taskController.js";

const router = express.Router();

// Validation middleware for POST /tasks
const validateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
];

// GET /tasks
router.get("/", getTasks);

// POST /tasks
router.post("/", validateTask, (req, res) => {
  // Check if there are validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If validation passes, call addTask to add the task
  addTask(req, res);
});

export default router;
