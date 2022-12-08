interface ToDo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface GetToDoResponse extends Array<ToDo> {}

export interface CreateToDoRequest {
  todo: string;
}
export interface CreateToDoResponse extends ToDo {}
