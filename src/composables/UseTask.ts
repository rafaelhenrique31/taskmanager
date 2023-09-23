import { TaskPostRequest } from "services/task/types";
import { TASK_CLIENT } from "../services/task/TaskApiClient";

export function UseTask() {
  const getAllTask = async () => {
    return await TASK_CLIENT.TASK.getAllTasks();
  };

  const getTaskByUserId = async (userId: number) => {
    return await TASK_CLIENT.TASK.getTaskByUserId(userId);
  };

  const createTask = async (body: TaskPostRequest) => {
    return await TASK_CLIENT.TASK.createTask(body);
  };

  return {
    getAllTask,
    getTaskByUserId,
    createTask,
  };
}
