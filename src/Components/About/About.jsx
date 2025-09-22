import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpeg'






const About = () => {
  return (
    <div>
      <div id='about' className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            
            <img src={about_profile} alt="" className='about-profile-img' />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I Love turning ideas into interactive designs while ensuring smooth user experience </p>
              <p>Passionate about Collaboration and Innovation.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
              <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "70%" }} /></div>
              <div className="about-skill"><p>React JS</p> <hr style={{ width: "60%" }} /></div>
              <div className="about-skill"><p>Bootstrap</p> <hr style={{ width: "50%" }} /></div>
              <div className="about-skill"><p>Git</p> <hr style={{ width: "50%" }} /></div>

            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default About
