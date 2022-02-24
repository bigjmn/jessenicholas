import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import {motion} from 'framer-motion'

import classes from './ProjectGrid.module.css'

import analyticsicon from '../../assets/skillicons/analyticsicon.png'

import tetrissnap from '../../assets/projectsnapshots/NewTetrisSnapshot.mp4'
import welpsnap from '../../assets/projectsnapshots/welpsnapshot.png'
import MazebotVid from '../../assets/projectsnapshots/MazebotVid.mov'
import shockdrawvid from '../../assets/projectsnapshots/shockdrawsnapshot.mov'
const ProjectGrid = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.outerContainer}>
      <h2>projects</h2>

      <div className={classes.projectsContainer}>


          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/shockanddraw')}>
            <div className={classes.snapShot}>
              <video className={classes.projectSnap} src={shockdrawvid} alt='shock and draw' autoPlay loop muted></video>
            </div>
      
            <h3>Shock and Draw</h3>
              <p>A head-to-head team drawing and guessing game</p>

          </motion.div>



          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/tetrisbuddies')}>
            <div className={classes.snapShot}>
              <video className={classes.projectSnap} src={tetrissnap} alt='tetris buddies'></video>

            </div>
            <h3>Tetris Buddies</h3>
            <p>A collaborative Tetris game of asymmetrical information</p>
          </motion.div>


      </div>

      <div className={classes.projectsContainer}>


          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/qmazesolver')}>
            <div className={classes.snapShot}>
              <video className={classes.projectSnap} src={MazebotVid} alt='maze solving ai' autoPlay loop muted ></video>
            </div>
            <h3>Q Maze Solver</h3>
            <p>A maze-solivng AI that uses reenforcement learning methods</p>
          </motion.div>



          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/welp')}>
            <div className={classes.snapShot}>
              <img className={classes.projectSnap} src={welpsnap} alt='welp'></img>

            </div>
            <h3>Welp</h3>
            <p>A restaurant-finder for the very indecisive.</p>
          </motion.div>


      </div>
    </div>
  )
}
export default ProjectGrid
