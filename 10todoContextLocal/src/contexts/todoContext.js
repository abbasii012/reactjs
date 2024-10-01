
import  { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos:[
       {
        id:1,
        todo:"msg for todo",
        complete : false,
       }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo :(id)=>{},
    toggelComplete :(id)=>{},
})


export const TodoProvider = TodoContext.Provider

export const useToDo= ()=> {
  return useContext(TodoContext)
}
