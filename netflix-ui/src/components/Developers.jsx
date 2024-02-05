
import React from 'react'
import {Link} from 'react-router-dom'

import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      

     
      <div class="profile-card">
        <div class="image">
        <img src="" alt="" class="profile-pic"/>
        </div>
        <div class="text">
       
        <div class="text">
        <h2></h2>
        <span>Developer & Designer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6 className='h6'>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            </div>
        </div>
        </div>
      </section>
      
      </>
      );
}

export default Developers