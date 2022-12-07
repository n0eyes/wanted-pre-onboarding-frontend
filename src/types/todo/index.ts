interface ToDo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface getToDoResponse extends Array<ToDo> {}
