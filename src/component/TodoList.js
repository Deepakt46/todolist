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
            ...todos,{ text:inputText /*,id:Math.random() *1000 */},
        ])
        setInput(null)
    }
    
    const Deleting = (e) =>{
        setTodo(todos.filter((list)=> list.id !== todos.id ))

    }
   

    return(
        <div className="container">
           <h4> Your TodoList is </h4>
           <div className="container">
           <ul >
         {todos.map( (todo)=>(
             <Todo 
             text={todo.text}
             key={todos.id}
             />
         ))}
           </ul>
           </div>
            <div>
                <input value={inputText} onChange={inputHandler} className='f4 w-40 center pa1' type='text' placeholder='add items'></input>
               <div>
                <button onClick={Save} className='f9 w-09 m-2'>Save</button>
                <button onClick={Deleting} className='f9 w-09 m-2'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList