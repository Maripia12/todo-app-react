import React, { useState, useEffect } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };
  console.log(todoValue);

  const deleteTodo = id => {
    setTodo(todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
  }

  const editTask = (task,id) => {
    setTodo(todoValue.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing}: todo))
  }

  useEffect(()=>{
    // console.log(todoValue);
    localStorage.setItem("todos" , JSON.stringify(todoValue))
  },[todoValue])

  return (
    <div className="container bg-blue-950 mt-20 p-8 rounded-md border-4 border-indigo-500/100">
      <Form createTodo={createTodo} />
      {
      todoValue.map((todo, idx) => (
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo}/>
        ) : (
        <Todo task={todo} key={idx} deleteTodo={deleteTodo}
        editTodo={editTodo} />
        )
      ))
      }
    </div>
  );
};

export default TodoList;
