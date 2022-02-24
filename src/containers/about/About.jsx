import React, { useEffect,useState } from 'react'

import {motion} from 'framer-motion'
import {urlFor,client} from '../../client'
import AppWrap from '../../wrapper/AppWrap'
import './About.scss'
const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(()=>{
    const query='*[_type=="about"]';
    client.fetch(query)
    .then((data)=>setAbouts(data))
  },[])
  return (
    <>
    <header>
    <h2 className="head-text">
      while <span>(!dead)</span> {"{"}
      <br />
      eat();<br />
      <span>//sleep();</span><br />
      code();<br />
      {"}"}
    </h2>
    </header>
    <main className="app__profiles">
      {abouts.map((about,index)=>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        whileHover={{scale:1.1}}
        transition={{duration:1.3,type:'tween'}}
        className='app__profile-item'
        key={about.title+index}>
          <img src={urlFor(about.image)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
    </main>
    </>
  )
}

export default AppWrap(About,'about')