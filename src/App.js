import React ,{useState} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
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

  
  return (
    <div className="">
      <Navbar dark color="primary">
            <div className="container">
                  <NavbarBrand href="/" className="ml-2">TodoList</NavbarBrand>
                  <NavbarBrand className="mr-2"><Navigation setRoute={setRoute}/></NavbarBrand>
            </div>
        </Navbar>
        <div className="App">
           
                  {route==='home'
                    ?<TodoList inputText={inputText} todos={todos} setTodo={setTodo} setInput={setInput}/>
                    :(route==='signin'
                    ?<Signin setRoute={setRoute}/>
                    :<Signup setRoute={setRoute}/>
                    )
                  }
        </div>
        </div>
  );
}


export default App;
