import React from 'react'
import { motion } from 'framer-motion'
import avatar from '../../assets/avatar.png'
import circle from '../../assets/circle.png'
import react from '../../assets/react.svg'
import firebase from '../../assets/firebase.svg'
import express from '../../assets/express.svg'
import AppWrap from '../../wrapper/AppWrap'
import './Header.scss'
const Header = ({isOn}) => {
  const scaleVariants={
    whileInView: {
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <header className='app__header app__flex'>
      <motion.main className='app__header-info'
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:1.3}}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ayush</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Tech Enthusiast</p>
          </div>
        </div>
      </motion.main>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:1.3, delayChildren:0.5}}
      className='app__header-img' >
        <img src={avatar} alt="avatar" className='app__header-avatar'/>
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1,ease:'easeInOut'}}
        src={circle} className='overlay_circle'
        >
        </motion.img>
      </motion.div>
      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'>
        {[express,react,firebase].map((icon,index)=>(
          <div className='circle-cmp app__flex' key={`icon-${index}`}>
          <img src={icon} alt='icon' />
          </div>
        ))
        }
      </motion.div>
    </header>
  )
}

export default AppWrap(Header,'home')