"use client";

export default function TaskCard({
  task,
  onDelete,
  onComplete,
}: any) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      
      <div>
        <h2 className="text-gray-900 font-semibold">
          {task.title}
        </h2>

        <p className="text-gray-700 text-sm">
          {task.description}
        </p>
      </div>

      <div className="flex gap-2 items-center">

        {!task.completed ? (
          <button
            onClick={() => onComplete(task._id)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Pending
          </button>
        ) : (
          <button
            disabled
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Completed
          </button>
        )}

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
}