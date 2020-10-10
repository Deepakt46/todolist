import React, { useState } from 'react'

const Signin = ({setRoute}) =>{

const [sigininEmail, setSiginin] = useState()
const [password, setPasswprd] = useState()

const onEmailchange = (e) => {
 setSiginin(e.target.value)
}

const onPasswordchange = (e) =>{
  setPasswprd(e.target.value)
}
const onSubmit = () =>{
  fetch('http://localhost:3000/signin',{
 method: 'post',
 headers: {'Content-Type':'application/json'},
 body:JSON.stringify({
   email:sigininEmail,
   password:password
 })
  })
  .then(response => response.json())
  .then(data =>{
    if (data === 'sucess'){
       setRoute('home')
    }
  })
 
}

    return(
        <div>
        <div class="login">
  <div class="heading">
    <h2>Sign in</h2>
    <form action="#">

      <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input onChange={onEmailchange} type="text" class="form-control" placeholder="Username or email"/>
          </div>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input onChange={onPasswordchange} type="password" class="form-control" placeholder="Password"/>
        </div>

        <button  onClick={onSubmit} type="submit" class="float">Login</button>
        <div>
            <button  onClick={()=> setRoute('signup')} type='submit' className='float'>Sign up</button>
        </div>
       </form>
 		</div>
 </div>
         
        </div>
    )
}
export default Signin