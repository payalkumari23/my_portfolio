import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import about_profile from '../../assets/about_profile.jpeg'

const Hero = () => {
  return (
    
      <div id='home'className="hero">
          <img src={about_profile} alt="" className='about-profile-img' />
                
        <h1><span>Hello! This is Payal Gupta,</span>Frontend developer with a focus on building responsive and user friendly web applications ..</h1>
      
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
      
              
      </div>
    
  )
}
export default Hero
