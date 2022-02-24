import {useState, useEffect} from 'react'
import classes from './Bio.module.css'

const Bio = () => {

  return (
    <div className={classes.outerContainer}>
      <div className={classes.bioWrapper}>
      <h1>Jesse Nicholas</h1>
      <p>Hi there.
      I'm a self-taught software engineer currently based in Brooklyn, NY.
    </p>
    <p>
      I'm also a writer, and have written for various kid's TV shows including Sesame Street, Mecha Builders and Taffy.
    </p>
    <p>
      Competitive chess player. Semi-competitive pool player. Semi-competent piano player.
    </p>
    <p>Let's make something cool.</p>


      </div>
    </div>
  )
}
export default Bio
