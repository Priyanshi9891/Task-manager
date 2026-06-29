
"use client";

import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onDelete,
  onComplete,
}: any) {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks found
      </p>
    );
  }

  return (
    <div className="space-y-3 mt-6">
      {tasks.map((task: any) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}