// pages/taskdetails/[id].js
"use client"
import { useRouter } from 'next/navigation';

const TaskDetails = () => {
  const router = useRouter();

  // Fetch the task details using the id parameter

  return (
    <div>
      <h1>Task Details Page</h1>
    </div>
  );
};

export default TaskDetails;
