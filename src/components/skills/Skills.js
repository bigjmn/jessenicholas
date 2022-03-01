import classes from './Skills.module.css'
// skill logos
import compicon from '../../assets/skillicons/frontendicon.png'
import servericon from '../../assets/skillicons/servericon.png'
import roboticon from '../../assets/skillicons/roboticon.png'

import {motion} from 'framer-motion'

const slideRight = {
  hiddenleft: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {delay: 0.05, duration:1.5, ease:'easeOut'}
  }
}
const slideLeft = {
  hiddenright: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {delay:.05, duration:1.5, ease:'easeOut'}
  }

}
const Skills = () => {

  return (
    <motion.div className={classes.outerContainer}>
      <motion.h2 variants={slideLeft} initial='hiddenright' animate='visible'>skills</motion.h2>
      <motion.div className={classes.skillsContainer} variants={slideRight} initial='hiddenleft' animate='visible'>



        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={compicon} alt='front-end'></img>
          </div>
          <h4 style={{fontWeight:'600'}}>front-end development</h4>
          <p>I like creating dynamic websites, usually with React, though I’ve also used Vue 3 and of course good ol’ vanilla javascript. Design-wise, I go CSS or Bootstrap 5. </p>
          <p><i>I know my way around the Document Object Model, or ‘HTML’ for short.
</i></p>
        </div>

        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={servericon} alt='back-end'></img>
          </div>
          <h4>back-end development</h4>
          <p>I usually use NodeJS and Express  on the back end, but I’m familiar with Django as well. A lot of my projects use SocketIO to facilitate realtime communication.</p>
          <p><i>I'm a socket man, burning up his fuse up here alone...</i></p>
        </div>






        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={roboticon} alt='ML'></img>
          </div>
          <h4>Machine Learning</h4>
            <p>Deep learning. Reinforcement learning. Deep reinforcement learning. I use Tensorflow/Keras to compile and train models. Always got an eye out for Markov Chains.
            </p>
            <p><i>Smarter Child and I are still each waiting for the other to apologize.</i></p>
        </div>



      </motion.div>


    </motion.div>
  )
}
export default Skills
