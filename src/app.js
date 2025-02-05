import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Routes
app.use("/tasks", taskRoutes);

export default app;
