import React from 'react'
import './register.css'
import axios from "axios";
 import { useNavigate } from "react-router-dom";
import { useState, useEffect  } from 'react';
export default function Registration() {
   const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phn: "",
    gender: "",
    pass: "",
    cnfpass: "",
  });
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (user.pass !== user.cnfpass) { return alert("Password does not matched ") }
    
      const resp = await axios.post("/user",
        { name: user.name, username: user.username, email: user.email, phn: user.phn, gender: user.gender, pass: user.pass })
      
      if (resp.data.success) console.log("Deta is posted successively");
      alert("Form Submitted");
      navigate('/Login');
      setuser(
        {
          name: "",
          username: "",
          email: "",
          phn: "",
          gender: "",
          pass: "",
          cnfpass: ""
        }
      )
    
    }
      
    
    catch (error) {
     if(error.response.status===422) alert("Email already exist")
      console.log(error);
      console.log("Something went wrong")
    }
  }
   
    const inputevent = (e) => {
      console.log(e.target.name);
      console.log(e.target.value);
      // you can also get placeholder by e.target.placeholder
      const { name, value } = e.target;
      setuser((prev) => {
        console.log(prev); // prev = {fname: "", lname: ""}
        return {
          ...prev,
          [name]: value, // here we are updating fname and lname like if name = fname nd fname is in
          // the prev object then update by that value
        };
      });
    };
    return (
      <div className="main">
        <div className="container">
          <div className="title">Registration</div>
          <div className="content">
            <form onSubmit={onSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={user.name}
                    onChange={inputevent}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={user.username}
                    onChange={inputevent}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={user.email}
                    onChange={inputevent}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    name="phn"
                    value={user.phn}
                    onChange={inputevent}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="pass"
                    value={user.pass}
                    onChange={inputevent}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={user.cnfpass}
                    name="cnfpass"
                    onChange={inputevent}
                    required
                  />
                </div>
              </div>
              <div className="gender-details">
             
                <input type="radio" name="gender" id="dot-1" value="male" onChange={inputevent} />
                <input type="radio" name="gender" id="dot-2" value="female" onChange={inputevent} />
                <input type="radio" name="gender" id="dot-3" value="abcd" onChange={inputevent} />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
                  <label for="dot-3">
                    <span className="dot three"></span>
                    <span className="gender">Prefer not to say</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

