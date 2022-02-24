import {useState, useEffect} from 'react'
import classes from './Home.module.css'

import Bio from '../../components/bio/Bio'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'
import ProjectGrid from '../../components/projectgrid/ProjectGrid'
const Home = () => {


  return (
    <div>




      <div className={classes.contentWrapper}>
        <Bio />

        <Skills />
        <ProjectGrid />
        <Contact />

      </div>


    </div>
  )
}
export default Home
