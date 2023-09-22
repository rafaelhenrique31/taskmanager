import { TASK_CLIENT } from "../services/task/TaskApiClient";

export function UseTask() {
  const getTask = async () => {
    return await TASK_CLIENT.TASK.getAllTasks();
  };

  return {
    getTask,
  };
}
