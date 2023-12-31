import type { TaskGetResponse, TaskPostRequest, TaskPutRequest } from "./types";
import type { AxiosInstance } from "axios";

class TaskService {
  private readonly httpClient: AxiosInstance;
  private readonly BASE_PATH = "/Task";

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  getAllTasks = async () => {
    const url = `${this.BASE_PATH}`;
    const response = await this.httpClient.get<TaskGetResponse[]>(url);
    return response.data;
  };

  getTaskByUserId = async (userId: number) => {
    const url = `${this.BASE_PATH}/${userId}`;
    const response = await this.httpClient.get<TaskGetResponse[]>(url);
    return response.data;
  };

  createTask = async (body: TaskPostRequest) => {
    const url = `${this.BASE_PATH}`;
    await this.httpClient.post(url, body);
  };

  updateTask = async (taskId: number, body: TaskPutRequest) => {
    const url = `${this.BASE_PATH}/${taskId}/Status`;
    await this.httpClient.put(url, body);
  };

  deleteTask = async (taskId: number) => {
    const url = `${this.BASE_PATH}/${taskId}`;
    await this.httpClient.delete(url);
  };
}

export default TaskService;
