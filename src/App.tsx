import React from "react";
import Todo from "./component/Todo";
import Button from "./component/Button";
// import logo from './logo.svg';
// import './App.css';
import todoStore from "./store/TodoStore";

const App: React.FC = () => {
  return (
    <>
      <Todo />
      <Button
        onClick={e => todoStore.addTodo({ todo: "하이요", isActive: false })}
      ></Button>
    </>
  );
};

export default App;
