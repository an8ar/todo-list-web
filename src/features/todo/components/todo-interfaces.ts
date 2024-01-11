export type StatusType = "Pending" | "InProgress" | "Completed" | "Failed";
export interface ITodo {
  topic: string;
  description: string;
  status: StatusType;
  id: number;
}
