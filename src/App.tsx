
import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';
const App: React.FC = () => {//arrow function of type functional component React.FC
  //creating first state
  const[todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) =>
    {
      e.preventDefault();
      
      if (todo)
        {
          setTodos([...todos, {id:Date.now(),todo, isDone:false}])
          setTodo("");
        }

    };

  console.log(todos);
  return (
    <div className="App">
      <div className="header">
        <span className="heading ">What to do</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
       

      </div>
    </div>
  );
}

export default App;
