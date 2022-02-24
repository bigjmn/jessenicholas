import {useState, useEffect} from 'react'
import classes from './Home.module.css'

import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'
import ProjectGrid from '../../components/projectgrid/ProjectGrid'
const Home = () => {


  return (
    <div>




      <div className={classes.contentWrapper}>
      <Skills />
      <ProjectGrid />
      <Contact />

      </div>


    </div>
  )
}
export default Home
