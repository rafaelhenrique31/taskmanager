export interface TaskGetResponse {
  id: number;
  title: string;
  description: string;
  createAt: Date;
  completionDate: Date;
  estimatedDate: Date;
  status: number;
  priority: number;
  userTaskId: number;
}
export interface TaskPostRequest {
  title: string;
  description: string;
  estimatedDate: Date;
  priority: number;
  status: number;
  userTaskId: number;
}
export interface TaskPutRequest {
  completionDate: Date;
  statusEnum: number;
}
