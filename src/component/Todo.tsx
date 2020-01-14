import React from "react";
import TodoList from "./TodoList";
import { ITodoItem } from "../types";

type TodoProps = {
  todoList: ITodoItem[];
};

function Todo({ todoList }: TodoProps) {
  return <TodoList todoList={todoList}></TodoList>;
}

export default Todo;
