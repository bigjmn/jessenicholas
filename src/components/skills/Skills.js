import {useState, useEffect} from 'react'
import classes from './Skills.module.css'
// skill logos
import webicon from '../../assets/skillicons/webicon.png'
import roboticon from '../../assets/skillicons/roboticon.png'
import analyticsicon from '../../assets/skillicons/analyticsicon.png'

const Skills = () => {

  return (
    <div className={classes.outerContainer}>
      <h2>Skills</h2>
      <div className={classes.skillsContainer}>
        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={webicon} alt='web'></img>
          </div>
          <h4>Web Development</h4>
          <p>I like creating dynamic websites, usually with NodeJS and Express on the back end and React on the front.
          I also use SocketIO to enable realtime communications.</p>
        </div>

        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={roboticon} alt='ML'></img>
          </div>
          <h4>Machine Learning</h4>
            <p>I like deep learning. And reenforcement learning. And deep reenforcement learning. I use Tensorflow/Keras to compile and train models. Always got an eye out for Markov Chains.
            </p>
        </div>

        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={analyticsicon} alt='analytics'></img>
          </div>
          <h4>Analytics</h4>
          <p>I use statistical inference to analyze data and present it in ways that are clear and meaningful. I can also recognize when data is represented in ways that are biased and misleading. </p>
        </div>

      </div>
    </div>
  )
}
export default Skills
