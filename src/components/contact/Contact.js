import {useState, useEffect} from 'react'
import classes from './Contact.module.css'
import resumesrc from "../../assets/JesseNicholas_Resume.pdf"

import {motion} from 'framer-motion'

const projectVariants = {
  hidden: {
    opacity:0,

  },
  visible:{
    opacity:1,
    transition:{duration:1}
  },
  exit:{
    opacity:0,
    transition:{duration:1}
  }
}
const Contact = () => {

  return (
    <motion.div className={classes.outerContainer} variants={projectVariants} initial='hidden' animate='visible' exit='exit'>
      <h2>contact</h2>
      <div className={classes.contactWrapper}>
        <div>email: jesseanicholas[at]gmail[dot]com</div>
        <div>Twitter: @JNicksLive</div>
        <div>GitHub: <a href="https://github.com/bigjmn">bigjmn</a> </div>
        <div>resume: <a href={resumesrc}>Jesse Nicholas Resume</a> </div>



      </div>
    </motion.div>
  )
}
export default Contact
