import React from 'react'

const Signin = ({ setRoute }) => {
  return (
    <div>
      <div class="login">
        <div class="heading">
          <h2>Sign in</h2>
          <div className="container">
            <form action="#">

              <div className="row mb-1">
                <span className="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" className="form-control" placeholder="Username or email" />
              </div>

              <div class="row mb-1">
                <span className="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <button onClick={() => setRoute('home')} type="submit" className="float m-2">Login</button>
              <button onClick={() => setRoute('signup')} type='submit' className="float m-2 ">Sign up</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Signin