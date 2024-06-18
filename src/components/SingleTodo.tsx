import React, { FormEvent } from 'react'
import {Todo} from "../model";
import "./styles.css";
// import TodoList from './TodoList';

type Props={
    todo:Todo,
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo, todos, setTodos}: Props) => {

    // const handleDone=(id: number)=>{
    //   setTodos (todos.map((todo)=>
    //     todo.id === id?{...todo,isDone:!todo.isDone}:todo))

    //   console.log (todos.filter((todo)=>
    //     todo.id ===id))
    // };

    const handleDone = (id: number) => {
      console.log('Handling done for id:', id);
      const updatedTodos = todos.map((todo) => 
          todo.id === id ? { ...todo, isDone: !todo.isDone }: todo);
      console.log('Updated Todos:', updatedTodos);

      setTodos(updatedTodos);
  };

    const handleDelete=(id: number)=>{
      setTodos (todos.filter((todo)=>
        todo.id !==id))
    };


    const handleSubmit = (e: React.FormEvent, id: number) => {
      e.preventDefault();
      handleDone(id);
  };


  return (
  <form className="todos_single" onSubmit={(e) => handleSubmit(e, todo.id)}>
   
    {
      todo.isDone?(
        <s className="todos_single_text">
        {todo.todo}
    </s>
      ):(
    <span className="todos_single_text">
        {todo.todo}
    </span>
      )
    }


    
    <div className='buttons'>
       {/* <button className="edit">Edit</button> */}
       <button className="delete" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { 
                    e.preventDefault(); 
                    handleDelete(todo.id);
                }}>
        Delete</button>
       <button className="Complete" onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        handleDone(todo.id);
        }}>
        Complete</button>
        

    </div>

  </form>
  )
}

export default SingleTodo
