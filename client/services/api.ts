
const BASE_URL = "http://localhost:5000/api";

// GET TASKS
export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  const result = await res.json();
  return result.data;
};

// CREATE TASK
export const createTask = async (task: {
  title: string;
  description: string;
}) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return res.json();
};

// COMPLETE TASK
export const completeTask = async (id: string) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}/complete`, {
    method: "PATCH",
  });

  return res.json();
};

// DELETE TASK
export const deleteTask = async (id: string) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  return res.json();
};