import React from 'react'
import Todo from './Todo'

const TodoList = ({setInput, inputText, todos, setTodo}) =>{
    const inputHandler = (e) =>{
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const Save = (e) =>{
        e.preventDefault()
        setTodo([
            ...todos,{ text:inputText , id:Math.random() *1000},
        ])
        setInput('')
    }
    
    const Deleting = (e) =>{
        setTodo(todos.filter((list)=> list.id !== todos.id ))

    }
   

    return(
        <div>
           <p className='f4   color: #E7040F '> Your TodoList is </p>
           <ul className='center'>
         {todos.map( (todo)=>(
             <Todo 
             text={todo.text}
             key={todos.id}
             />
         ))}
           </ul>
            <div>
                <input value={inputText} onChange={inputHandler} className='f4 w-20 center pa1' type='text' placeholder='add items'></input>
               <div>
                <button onClick={Save} className='f9 w-09'>Save</button>
                <button onClick={Deleting} className='f9 w-09'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList