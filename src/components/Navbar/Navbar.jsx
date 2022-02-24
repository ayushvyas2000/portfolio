import React from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { useState } from 'react'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={logo} alt="Ayush Vyas" />
        </div>
        <ul className='app__navbar-links'>
        {['home','about','skills','projects','contact'].map((item)=>{
            return(
                <li className='app__flex p-text' key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
                </li> 
            )
        })
        }
        </ul>
        <aside className="app__navbar-menu">
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            
            {toggle &&(
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85, ease:'easeOut'}}>
            <HiX onClick={()=>setToggle(false)}/>
            <ul>
            {['home','about','skills','projects','contact'].map((item,index)=>{
            return(
                <li key={index}>
                <a onClick={()=>setToggle(false)} href={`#${item}`}>{item}</a>
                </li> 
                )})
            }
            </ul>
            </motion.div>
            )
            }
        </aside>
    </nav>
  )
}

export default Navbar