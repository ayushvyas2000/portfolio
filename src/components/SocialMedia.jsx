    import React from 'react'
    import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
    const SocialMedia = () => {
      return (
        <aside className="app__social">
          <a href='https://github.com/ayushvyas2000' target="_blank">
            <div>
            <BsGithub />
            </div>
            </a>  
            <a href="https://www.linkedin.com/in/ayush-vyas-a4801a191/" target="_blank">
            <div>
            <BsLinkedin/> 
            </div>
            </a>
            <a href="https://www.twitter.com/vyas_ayush_" target="_blank">
            <div>
            <BsTwitter/>
            </div>
            </a>
        </aside>
      )
    }
    
    export default SocialMedia