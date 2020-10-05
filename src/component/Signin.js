import React from 'react'

const Signin = ({setRoute}) =>{
    return(
        <div>
        <div class="login">
  <div class="heading">
    <h2>Sign in</h2>
    <form action="#">

      <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder="Username or email"/>
          </div>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input type="password" class="form-control" placeholder="Password"/>
        </div>

        <button  onClick={()=> setRoute('home')} type="submit" class="float">Login</button>
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