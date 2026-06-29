
import express from "express";
import {
  createTask,
  getTasks,
  markTaskComplete,
  deleteTask,
} from "../controllers/taskController";

import { validateTask } from "../middleware/validateTask";

const router = express.Router();

router.post("/tasks", validateTask, createTask);

router.get("/tasks", getTasks);

router.patch("/tasks/:id/complete", markTaskComplete);

router.delete("/tasks/:id", deleteTask);

export default router;