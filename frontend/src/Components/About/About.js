import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" alt = "#"/>
              </div>
            </div>

            <h2>Learning Robo</h2>
            <h3>Web developer</h3>
          </div>

          <ul className = "icons">
            <li><i className = "fab fa-facebook-f"></i></li>
            <li><i className = "fab fa-twitter"></i></li>
            <li><i className = "fab fa-linkedin"></i></li>
            <li><i className = "fab fa-instagram"></i></li>
          </ul>
        </div>
        
      </div>

      <div className = "about-right">
        <h1>Hello<span>!</span></h1>
        <h2>Here's who I am & what I do</h2>
        <div className = "about-btns">
          <button type = "button" className = "btn btn-pink">resume / CV</button>
          <button type = "button" className = "btn btn-white">Git hub</button>
        </div>

        <div className = "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
        <div className="credit">Made with <span style={{color:"tomato"}}>❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>
      </div>
    </div>
  )
}
