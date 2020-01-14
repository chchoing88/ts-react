import { ITodoItem, ITodoStore } from "../types";
import { BehaviorSubject } from "rxjs";

class TodoItem implements ITodoItem {
  todo: string;
  isActive: boolean;

  constructor(todo: string, isActive: boolean) {
    this.todo = todo;
    this.isActive = isActive;
  }
}

class TodoStore implements ITodoStore {
  todoList$: BehaviorSubject<ITodoItem[]>;

  constructor(todoList: ITodoItem[]) {
    this.todoList$ = new BehaviorSubject(todoList);
  }

  // action
  addTodo = ({ todo, isActive }: ITodoItem) => {
    const newTodo = new TodoItem(todo, isActive);
    const newTodoList = [...this.todoList$.value, newTodo];

    this.todoList$.next(newTodoList);
  };
}

const TODO_LIST: ITodoItem[] = [
  { todo: "typescript 학습하기", isActive: false }
];

const todoStore: ITodoStore = new TodoStore(TODO_LIST);

export default todoStore;
