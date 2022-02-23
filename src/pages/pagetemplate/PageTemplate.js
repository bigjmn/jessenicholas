import {useState, useEffect} from 'react'
import classes from './PageTemplate.module.css'

const PageTemplate = () => {

  return (
    <div className={classes.outerContainer}>
      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>What is it?</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>
            This is the section where I say what it is. blah blah blah, oh
            I'm oh so very proud. lah lah lah.


          </p>
        </div>
      </div>

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionName}>
          <h2>What I used</h2>
        </div>
        <div className={classes.sectionContent}>
          <p>  Tetris Buddies is an asymmetrical co-op Tetris variant. The usual tetris controls (shift left, shift right rotate) are distributed randomly amongst the team members, who then have to work together to maneuver the piece the way they want. With every new piece, the controls are re-assigned. There are three game modes:</p>

    <p><strong>Classic Mode:</strong> Perfect information - everyone on the team can how the controls are distributed.</p>
    <p><strong>Self View:</strong> Each player can see only his or her own controls.</p>
  <p><strong>
    Buddy View:</strong> Each player can see everyone else’s controls, but not their own.</p>
    <p>If you want to play Tetris Buddies, you can do that <a href="https://tetris-buddies.herokuapp.com/">here</a>. Or, check out the <a href="https://github.com/bigjmn/tetris-buddies">GitHub repo.</a> </p>
        </div>
      </div>
    </div>
  )
}
export default PageTemplate
