import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {  
  const [todos ,setTodos] = useState([    
    'Go to the gym',
    'Eat more fruits and vege',
    'Pickup the kids from school',
  ])

  const [todoValue,setTodoValue] = useState('');

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todosx2')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[]);

  function persistData(newList){
    localStorage.setItem('todosx2',JSON.stringify({todos:newList}))    
  }

  function handlerAddTodos(newTodo){
    if(newTodo != ""){
    const newTodoList =[...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    }else{
      alert("Canot be empty")
    }
  }
  

  function handlerDeleteTodos(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handlerEditTodos(index){    
    const valueEdit= todos[index]
    setTodoValue(valueEdit)
    handlerDeleteTodos(index)
  }  


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handlerAddTodos={handlerAddTodos} handlerEditTodos={handlerEditTodos}/>
      <TodoList todos={todos} handlerDeleteTodos={handlerDeleteTodos} handlerEditTodos={handlerEditTodos} />
    </>
  )
}

export default App
