import axios from "axios";
import TaskService from "./TaskService";
import { ENV } from "../../lib/env";

export const TaskApiClient = axios.create({
  baseURL: "http://localhost:5044/",
});

export const TASK_CLIENT = {
  TASK: new TaskService(TaskApiClient),
} as const;

export default TASK_CLIENT;
