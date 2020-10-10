import React, { useState } from 'react'

const Signup = ({setRoute, loadUser}) =>{


  const [Email, setEmail]= useState()
  const [pawd, setPwd] = useState()
  const [name, setName] = useState()
  
  const onEmailchange = (e) => {
   setEmail(e.target.value)
  }
  
  const onPasswordchange = (e) =>{
    setPwd(e.target.value)
  }
  const onNamechange = (e) =>{
  setName(e.target.value)
  }
  const onSubmit = () =>{
    fetch('http://localhost:3000/siginup',{
   method: 'post',
   headers: {'Content-Type':'application/json'},
   body:JSON.stringify({
     email:Email,
     password:pawd,
     name:name
   })
    })
    .then(response => response.json())
    .then(user =>{
      if (user){
        loadUser(user)
         setRoute('home')
      }
    })
   
  }
  

   return(
        <div>
        <div class="login">
  <div class="heading">
    <h2>Sign up</h2>
    <form action="#">

      <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input onChange={onEmailchange} type="text" class="form-control" placeholder="Email"/>
          </div>
          <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input onNamechange={onNamechange} type="text" class="form-control" placeholder="Name"/>
          </div>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input onChange={onPasswordchange} type="password" class="form-control" placeholder="Password"/>
        </div>

        <button  onClick={onSubmit} type="submit" class="float">Signup</button>
       </form>
 		</div>
 </div>
         
        </div>
    )
}
export default Signup