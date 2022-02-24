import {useState, useEffect} from 'react'
import classes from './Contact.module.css'
import resumesrc from "../../assets/JesseNicholas_Resume.pdf"
const Contact = () => {

  return (
    <div className={classes.outerContainer}>
      <h2>contact</h2>
      <div className={classes.contactWrapper}>
        <div>email: jesseanicholas[at]gmail[dot]com</div>
        <div>Twitter: @JNicksLive</div>
        <div>GitHub: <a href="https://github.com/bigjmn">Right here</a> </div>
        <div>resume: <a href={resumesrc}>Jesse Nicholas Resume</a> </div>



      </div>
    </div>
  )
}
export default Contact
