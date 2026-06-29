import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler } from "./middleware/errorHandler";
const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
// Routes
app.use("/api", taskRoutes);

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Task Management API Running",
  });
});

export default app;