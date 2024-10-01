import './App.css'
import React, { useEffect, useState } from 'react';
import {TodoProvider } from "./contexts";
import TodoForm from './components/TodoForm';
import TodoItem from './components/Todoitem';


function App() {
        const [todos,setTodos]=useState([])

        const addTodo=(todo)=>{
        setTodos((prev)=>[{id:Date.now(),...prev},...prev])
        }
        const updateTodo=(id,todo)=>{
            setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
        }
        const deleteTodo=(id)=>{
            setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!== id)))
        }
        const toggelComplete=(id)=>{
            setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?
                                        {...prevtodo,complete:!prevtodo.complete}:prevtodo)))
        }


        useEffect(() => {
            const todos = JSON.parse(localStorage.getItem("todos"))
        
            if (todos && todos.length > 0) {
              setTodos(todos)
            }
          }, [])
        
          useEffect(() => {
            localStorage.setItem("todos", JSON.stringify(todos))
          }, [todos])
  return (
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggelComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl bgfont-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                       {todos.map((todo)=>{
                        <div key={todo.id}
                        className='w-full'> 
                            <TodoItem todo={todo}/>
                        </div>  
                       })}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
