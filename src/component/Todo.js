import React from 'react'

const Todo = ({text,todos, setTodo,todo}) =>{
  const Deleting = (e) =>{
    setTodo(todos.filter((list)=> list.id !== todo.id ))

}
    return(
        <div>
           <li>
             {text}
             <button onClick={Deleting} className='f9 w-09'>Delete</button>
             
           </li>
        </div>


    )
}
export default Todo