Task Manager

## Overview

This is a full-stack Task Manager application built using Next.js, Express.js, TypeScript, and MongoDB.

Users can:
- Add a task
- View all tasks
- Mark a task as completed
- Delete a task

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Express.js
- TypeScript
- MongoDB
- Mongoose


- Used MVC architecture in the backend to separate routes, controllers, models, and middleware.
- Used reusable React components (TaskForm, TaskList, TaskCard) to keep the frontend modular.
- Stored task status using a Boolean (`completed`) because it is simple and efficient.
- Added middleware for request validation to keep controllers clean.
- Used MongoDB because its document model matches the application's data structure.
