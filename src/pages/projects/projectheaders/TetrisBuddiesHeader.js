import {useState, useEffect} from 'react'
import classes from './HeaderStyles.module.css'
import ReactPlayer from 'react-player'

const TetrisBuddiesHeader = () => {

  return (
    <div className={classes.headerContainer}>
      <ReactPlayer url={"https://www.youtube.com/watch?v=eWcCxjcXugg"}/>

    </div>
  )
}
export default TetrisBuddiesHeader
