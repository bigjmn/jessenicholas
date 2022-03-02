import {useNavigate} from 'react-router-dom'
import {useRef, useEffect} from 'react'
import {motion} from 'framer-motion'

import classes from './ProjectGrid.module.css'
import {useMobile} from '../../hooks/useMobile'

import tetrissnap from '../../assets/projectsnapshots/NewTetrisSnapshot.mp4'
import welpsnap from '../../assets/projectsnapshots/welpsnapshot.png'
import MazebotVid from '../../assets/projectsnapshots/MazebotVid.mov'
import shockdrawvid from '../../assets/projectsnapshots/shockdrawsnapshot.mov'
import mazePic from '../../assets/projectsnapshots/mazePic.png'
const slideRight = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {delay: 0, duration:1, ease:'easeOut'}
  }
}
const slideLeft = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {delay:0, duration:1, ease:'easeOut'}
  }

}
const slideRight2 = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {delay: .5, duration:1, ease:'easeOut'}
  }
}
const slideLeft2 = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {delay:.5, duration:1, ease:'easeOut'}
  }

}
const ProjectGrid = () => {
  const navigate = useNavigate()


  const mobile = useMobile()



  return (
    <motion.div className={classes.outerContainer} >
      <h2>projects</h2>

      <div className={classes.projectsContainer}>


          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/shockanddraw')} variants={slideRight} initial='hidden' animate='visible'>
            <div className={classes.snapShot}>

            <video className={classes.projectSnap} src={shockdrawvid} alt='shock and draw' autoPlay loop muted></video>
            </div>

            <h3>Shock and Draw</h3>
              <p>A head-to-head team drawing and guessing game</p>

          </motion.div>



          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/tetrisbuddies')} variants={slideLeft} initial='hidden' animate='visible'>
            <div className={classes.snapShot}>
              <video className={classes.projectSnap} src={tetrissnap} alt='tetris buddies' autoPlay loop muted></video>

            </div>
            <h3>Tetris Buddies</h3>
            <p>A collaborative Tetris game of asymmetrical information</p>
          </motion.div>


      </div>

      <div className={classes.projectsContainer}>


          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/qmazesolver')} variants={slideRight2} initial='hidden' animate='visible'>
            <div className={classes.snapShot}>
              {mobile && <img className={classes.projectSnap} src={mazePic} alt='mazepic'></img>}
              {!mobile && <video className={classes.projectSnap} src={MazebotVid} alt='maze solving ai' autoPlay loop muted ></video>}
            </div>
            <h3>Q Maze Solver</h3>
            <p>A maze-solivng AI that uses reinforcement learning methods</p>
          </motion.div>



          <motion.div whileHover={{scale:1.1}} className={classes.projectWrapper} onClick={() => navigate('/welp')} variants={slideLeft2} initial='hidden' animate='visible'>
            <div className={classes.snapShot}>
              <img className={classes.projectSnap} src={welpsnap} alt='welp'></img>

            </div>
            <h3>Welp</h3>
            <p>A restaurant-finder for the very indecisive.</p>
          </motion.div>


      </div>
    </motion.div>
  )
}
export default ProjectGrid
