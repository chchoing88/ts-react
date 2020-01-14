import React from "react";
import { ITodoItem } from "../types";

type TodoItemProps = {
  todoItem: ITodoItem;
};

function TodoItem({ todoItem }: TodoItemProps) {
  return <li>{todoItem.todo}</li>;
}

export default TodoItem;
