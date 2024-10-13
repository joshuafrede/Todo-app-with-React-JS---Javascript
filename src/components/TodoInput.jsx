export default function Todoinput(props) {
 
    const {handlerAddTodos , todoValue , setTodoValue}  = props    
    
  return (
    <header>
        <input value={todoValue} onChange={(e) => {                        
            setTodoValue(e.target.value)
            }} placeholder='Enter Todo . . .'/>
        <button onClick={() => {
            handlerAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  ) 
}