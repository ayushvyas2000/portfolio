import React, { useState } from 'react'
import './Footer.scss'
import coffee from '../../assets/coffee.svg'
import connect from '../../assets/connect.svg'
import AppWrap from '../../wrapper/AppWrap'
import { motion } from 'framer-motion'
import {client} from '../../client'
import { Hearts } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Footer = () => {
  const [message, setMessage] = useState({
    name:'',
    email:'',
    body:''
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {name,email,body} = message 

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    const contact={
      ...message,
      _type:'contact'
    }
    client.create(contact)
    .then(()=>{
      setLoading(false)
      setSubmitted(true)
    }).catch((error)=>{
      setLoading(false)
      console.log(error)
    })
    setMessage({
      name:'',
      email:'',
      body:''
    })
  }
  const onChange=(e)=>{
    setMessage({
      ...message,
      [e.target.id]:e.target.value
    })
  }

  return (
    <>
    <header className='app__flex'>
      <motion.div
      className="app__footer-head app__flex"
      whileInView={{opacity:[0,1]}}
      transition={{duration:1.3,type:'tween'}}>
        <div className="app__footer-head-connect">
          <img src={connect} alt="connect" />
          <h2 className="head-text">Let's <span style={{color:'#6C63FF'}}>Connect...</span> </h2>
        </div>
        <div className="app__footer-head-connect">
          <img src={coffee} alt="coffee" />
          <h2 className="head-text">And have a cup of <span style={{color:'#6C63FF'}}>coffee.</span> </h2>
        </div>
      </motion.div>
    </header>
    {submitted?
    (<>
    <h3 style={{marginTop:20}} className="head-text">Your message was submitted</h3>
    <button onClick={()=>setSubmitted(false)} className="primary-btn">SEND AGAIN</button>
    </>):(
    <form onSubmit={handleSubmit}>
      <main className="app__footer-contact app__flex">
        <h3 className="head-text">CONTACT ME</h3>
        <div className="app__footer-contact-form app__flex">
        <input className='p-text' placeholder='Your Name'
        type="text" maxLength='50' required
        value={name} id='name' onChange={onChange}
        />
        <input className='p-text' placeholder='Your Email' type="email"
        maxLength='50' required
        value={email} id='email' onChange={onChange} />
        </div>
        <textarea className='p-text' placeholder='Your message' required
        value={body} id='body' onChange={onChange} />
        
          <button className='primary-btn' type='submit'>
            SEND
          </button>
          {loading&&(<>
          <p className="p-text">Sending Your Message</p>
          <Hearts
          height="30"
          width="30"
          color='grey'
          ariaLabel='loading'
        />
        </>)
          }
      </main>
      </form>
      )}
    </>
  )
}

export default AppWrap(Footer,'contact')