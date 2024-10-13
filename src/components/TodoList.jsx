import TodoCard from './TodoCard'

export default function TodoList(props) {
 
  const {todos} = props

  //test commit

  return (
    <ul className='main'>
    {
      todos.map((todo,todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex} todo_text={todo}>            
          </TodoCard>
        )
      })
    }
    </ul>
  )
}
