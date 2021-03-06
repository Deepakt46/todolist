import React ,{useState} from 'react';
import Navigation from './component/Navigation'
import TodoList from './component/TodoList'
import Signin from './component/Signin'
import Signup from './component/Signup'
import 'tachyons'
import './App.css';

const App = () => {

  const [route, setRoute] = useState('home')
  const [inputText, setInput] = useState('')
  const [todos ,setTodo] = useState([])
  const [user, setUser] = useState([])
const loadUser =(user) =>{
setUser({
  id:user.id,
  name:user.name,
  email:user.email,
  entries:[],
  join:user.join
})
}


  
  return (
    <div className="App">
      <Navigation setRoute={setRoute}/>
      {route==='home'
      ?<TodoList inputText={inputText} todos={todos} setTodo={setTodo} setInput={setInput}/>
      :(route==='signin'
      ?<Signin setRoute={setRoute}/>
      :<Signup user={user} loadUser={loadUser} setRoute={setRoute}/>
      )
    
      }
      
     
    </div>
  );
}


export default App;
