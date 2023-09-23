import { TASK_CLIENT } from "../services/task/TaskApiClient";

export function UseTask() {
  const getAllTask = async () => {
    return await TASK_CLIENT.TASK.getAllTasks();
  };

  const getTaskByUserId = async (userId: number) => {
    return await TASK_CLIENT.TASK.getTaskByUserId(userId);
  };

  return {
    getAllTask,
    getTaskByUserId,
  };
}
