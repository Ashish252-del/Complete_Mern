import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'
export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
       const resp = await axios.post('/signin',
         { email: email, password: password });
     if (resp.data.success === true) alert("logged in successfully");
       console.log(email + " " + password);
       setemail("");
       setpassword("");
      navigate('/')
    } catch (error) {
      if (error.response.status === 400) alert("Invalid credential");
      console.log(error);
      
    }
  
  }
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
                <form onSubmit={handleSubmit}>
                  <p>
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      name='email'
                      value={email}
                      onChange = {(e)=>{
                        setemail(e.target.value);
                      }}
                      placeholder="Email"
                      required
                    />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required
                      value={password} onChange={(e) => {
                        setpassword(e.target.value)
                      }} />
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
