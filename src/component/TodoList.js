import React from 'react'
import Todo from './Todo'

const TodoList = ({setInput, inputText, todos, setTodo}) =>{
    const inputHandler = (e) =>{
     
        setInput(e.target.value)
    }
    const Save = (event) =>{
        event.preventDefault()
        if(inputText!==''){
        setTodo([
            ...todos,{ text:inputText, id:Math.random() *1000 },
        ])
        setInput('')
    }}
    
  
   

    return(
        <div>
           <p className='f4   color: #E7040F '> Your TodoList is </p>
           <ul className='center'>
         {todos.map( (todo)=>(
             <Todo 
             text={todo.text}
             key={todo.id}
             todos={todos} setTodo={setTodo}
             todo={todo}
             />
         ))}
           </ul>
            <div>
                <input  value={inputText} onChange={inputHandler} className='f4 w-20 center pa1' type='text' placeholder='add items'></input>
               <div>
                <button onClick={Save} className='f9 w-09'>Save</button>
                
                </div>
            </div>
        </div>
    )
}

export default TodoList