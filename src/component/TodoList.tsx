import React from "react";
import TodoItem from "./TodoItem";
import { ITodoItem } from "../types";

type TodoListProps = {
  todoList: ITodoItem[];
};

function TodoList({ todoList }: TodoListProps) {
  return (
    <ul>
      {todoList.map((todoItem: ITodoItem) => (
        <TodoItem key={todoItem.todo} todoItem={todoItem}></TodoItem>
      ))}
    </ul>
  );
}

TodoList.defaultProps = {
  todoList: []
};

export default TodoList;
