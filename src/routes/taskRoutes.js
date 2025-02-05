import express from "express";
import { getTasks, addTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks); // GET /tasks
router.post("/", addTask); // POST /tasks

export default router;
