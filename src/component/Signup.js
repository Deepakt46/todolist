import React from 'react'

const Signup = ({ setRoute }) => {
  return (
    <div>
      <div class="login">
        <div class="heading">
          <h2>Sign up</h2>
          <div className="container">
            <form action="#">
              <div class="row mb-1">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" placeholder="Email" />
              </div>

              <div class="row mb-1">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" placeholder="Name" />
              </div>

              <div class="row mb-1">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" class="form-control" placeholder="Password" />
              </div>

              <button onClick={() => setRoute('home')} type="submit" class="float">Signup</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup