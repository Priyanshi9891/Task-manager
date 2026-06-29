import { Request, Response } from "express";
import Task from "../models/Task";

// CREATE TASK

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title: title.trim(),
      description: description?.trim() || "",
      completed: false,
    });

    return res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET ALL TASKS
export const getTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tasks",
    });
  }
};

// MARK COMPLETE 
export const markTaskComplete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    task.completed = true;
    await task.save();

    return res.status(200).json({
      success: true,
      message: "Task marked as complete",
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error marking task complete",
    });
  }
};

// DELETE TASK
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting task",
    });
  }
};