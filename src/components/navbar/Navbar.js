import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {

  return (
    <nav className={classes.navbar}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/pagetemplate">Contact</a></li>

      </ul>
    </nav>
  )
}
export default Navbar
