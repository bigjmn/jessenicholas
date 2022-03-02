import {useState, useEffect} from 'react'
import classes from './Bio.module.css'

import {motion} from 'framer-motion'

const pageMotion = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
  exit: { opacity: 0, x:-100, transition: { ease: 'easeInOut' } }
};

const Bio = () => {



  return (
    <motion.div className={classes.outerContainer}
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="exit"

>
      <motion.div className={classes.bioWrapper}>
      <h1>Jesse Nicholas</h1>
      <p>Hi there.
      I'm a self-taught software engineer currently based in Brooklyn, NY. I made this website - check out the
      github repo <a href="https://github.com/bigjmn/jessenicholas">here.</a>
    </p>
    <p>
      I'm also a writer, and have written for various kid's TV shows including Sesame Street, Mecha Builders and Taffy.
    </p>
    <p>
      Competitive chess player. Semi-competitive pool player. Semi-competent piano player.
    </p>
    <p>Let's make something cool.</p>


    </motion.div>
    </motion.div>
  )
}
export default Bio
