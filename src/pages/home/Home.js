import {useState, useEffect} from 'react'
import classes from './Home.module.css'

import Skills from '../../components/skills/Skills'
import ProjectGrid from '../../components/projectgrid/ProjectGrid'
const Home = () => {


  return (
    <div>




      <div className={classes.contentWrapper}>
      <Skills />
      <ProjectGrid />

      </div>


    </div>
  )
}
export default Home
