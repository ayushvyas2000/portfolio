import React,{useState,useEffect} from 'react'
import {urlFor,client} from '../../client'
import { motion } from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import './Projects.scss'
const Projects = () => {
  const [projects, setprojects] = useState([]);

  useEffect(()=>{
    const query='*[_type == "projects"]'
    client.fetch(query)
    .then((data)=>{
      setprojects(data)
    })
  },[])
  return (
    <>
    <header>
    <h2 className="head-text"><span>Knowledge</span> without <span>execution</span> is useless.</h2>
    </header>
    <main>
      <h3 className='head-text' style={{marginTop:30}}><span>My personal projects</span></h3>
      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:1.3, delayChildren:0.5}}
      className='app__work-portfolio'
      >
      {projects.map((project,index)=>{
        return(
        <div key={project.title+index} className="app__work-item">
          <div className="app__work-img app__flex">
            <img src={urlFor(project.image)} alt={project.title} />
            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
            className='app__work-hover app__flex'
            >
            <a href={project.projectLink} target="_blank">
              <motion.div
              whileInView={{scale:[0,1]}}
              whileHover={{scale:[1,0.9]}}
              transition={{duration:0.25}}
              className="app__flex"
              >
              <AiFillEye />
              </motion.div>
            </a>
            <a href={project.codeLink} target="_blank">
              <motion.div
              whileInView={{scale:[0,1]}}
              whileHover={{scale:[1,0.9]}}
              transition={{duration:0.25}}
              className="app__flex"
              >
              <AiFillGithub />
              </motion.div>
            </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">{project.title}</h4>
            <p className="p-text" style={{marginTop:10}} >{project.description}</p>
          </div>
        </div>
        )
      })}
      </motion.div>
    </main>
    </>
  )
}

export default AppWrap(Projects,'projects')