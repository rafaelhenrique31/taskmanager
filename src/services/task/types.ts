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
