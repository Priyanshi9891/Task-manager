
"use client";

import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
} from "@/services/api";

export default function HomePage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task: {
    title: string;
    description: string;
  }) => {
    await createTask(task);
    fetchTasks();
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleComplete = async (id: string) => {
    await completeTask(id);
    fetchTasks();
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-6">
           Task Manager
        </h1>

        <TaskForm onAddTask={handleAddTask} />

        {loading && (
          <p className="text-center text-gray-500 mt-4">
            Loading tasks...
          </p>
        )}

        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </div>
    </main>
  );
}