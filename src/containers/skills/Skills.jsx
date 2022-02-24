import React, { useEffect, useState } from 'react'
import AppWrap from '../../wrapper/AppWrap'
import './Skills.scss'
import {urlFor,client} from '../../client'
import { motion } from 'framer-motion'
const Skills = () => {
  const [skills, setSkills] = useState([])
  const [tools, settools] = useState([])
  useEffect(()=>{
    const query1='*[_type=="skills"]';
    client.fetch(query1)
    .then((data)=>setSkills(data))
    const query2='*[_type=="tools"]';
    client.fetch(query2)
    .then((data)=>settools(data))
  },[])
  return (
    <>
    <header>
      <h2 className="head-text">
        The <span>future</span> belongs to those who learn <span>more skills</span> and combine them in <span>creative ways.</span> 
      </h2>
    </header>
    <main>
    <h3 className='head-text' style={{marginTop:30}}><span>What I know?</span></h3>
    <div className="app__skills">
    {skills.map((skill,index)=>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        whileHover={{scale:1.1}}
        transition={{duration:1.3,type:'tween'}}
        className='app__skill-item app__flex'
        key={skill.skill+index}>
          <img src={urlFor(skill.logo)} alt={skill.skill} />
          <h2 className='bold-text' style={{marginTop:10,letterSpacing:1}}>{skill.skill}</h2>
        </motion.div>
      ))}
      </div>
      <h3 className='head-text' style={{marginTop:30}}><span>My Toolkit</span></h3>
      <div className="app__skills">
    {tools.map((tool,index)=>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        whileHover={{scale:1.1}}
        transition={{duration:1.3,type:'tween'}}
        className='app__skill-item app__flex'
        key={tool.tool+index}>
          <img src={urlFor(tool.logo)} alt={tool.tool} />
          
          <h2 className='bold-text' style={{marginTop:10,letterSpacing:1}}>{tool.tool}</h2>
        </motion.div>
      ))}
      </div>
    </main>
    </>
  )
}

export default AppWrap(Skills,'skills')