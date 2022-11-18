import React from 'react'
import './login.css'
export default function Login() {
    return (
      <div className="log">
        <div className="wrapper login">
          <div className="container">
            <div className="col-left">
              <div className="login-text">
                <h2>Welcome Back</h2>
                <p>
                  Create your account.
                  <br />
                  It's totally free.
                </p>
                <a href="googl.com" className="btn">
                  Sign Up
                </a>
              </div>
            </div>

            <div className="col-right">
              <div className="login-form">
                <h2>Login</h2>
                <form action="">
                  <p>
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Username or Email"
                      required
                    />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p>
                    <input type="submit" value="Sign In" />
                  </p>
                  <p>
                    <a href="google.com">Forget password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
