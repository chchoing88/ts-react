import React from "react";
import TodoList from "./TodoList";
import useObservable from "../hooks/useObservable";
import todoStore from "../store/TodoStore";
import { ITodoItem } from "../types";

function Todo() {
  const todoList = useObservable<ITodoItem[]>(todoStore.todoList$);

  return <TodoList todoList={todoList}></TodoList>;
}

export default Todo;
