import { Request, Response, NextFunction } from "express";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({
      success: false,
      message: "Title is required and must be a string",
    });
  }

  if (title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Title cannot be empty",
    });
  }

  if (description && typeof description !== "string") {
    return res.status(400).json({
      success: false,
      message: "Description must be a string",
    });
  }

  next(); 
};