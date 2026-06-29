// import express from "express";
// import {
//   createTask,
//   getTasks,
//   markTaskComplete,

//   deleteTask,
// } from "../controllers/taskController";

// const router = express.Router();

// // CREATE
// router.post("/tasks", createTask);

// // READ
// router.get("/tasks", getTasks);

// // UPDATE STATUS
// router.patch("/tasks/:id/complete", markTaskComplete);

// // DELETE
// router.delete("/tasks/:id", deleteTask);

// export default router;
import express from "express";
import {
  createTask,
  getTasks,
  markTaskComplete,
  deleteTask,
} from "../controllers/taskController";

import { validateTask } from "../middleware/validateTask";

const router = express.Router();

// CREATE TASK (with middleware)
router.post("/tasks", validateTask, createTask);

// READ
router.get("/tasks", getTasks);

// UPDATE
router.patch("/tasks/:id/complete", markTaskComplete);

// DELETE
router.delete("/tasks/:id", deleteTask);

export default router;