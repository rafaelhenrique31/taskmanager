import type { TaskGetResponse } from "./types";
import type { AxiosInstance } from "axios";

class TaskService {
  private readonly httpClient: AxiosInstance;
  private readonly BASE_PATH = "/Task";

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getAllTasks = async () => {
    const url = `${this.BASE_PATH}`;
    const response = await this.httpClient.get<TaskGetResponse>(url);
    return response.data;
  };
}

export default TaskService;
