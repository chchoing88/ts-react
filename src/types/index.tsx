import { BehaviorSubject } from "rxjs";

export interface ITodoItem {
  todo: string;
  isActive: boolean;
}

export interface ITodoStore {
  // todoList: ITodoItem[];
  todoList$: BehaviorSubject<ITodoItem[]>;
  addTodo: ({ todo, isActive }: ITodoItem) => void;
}
