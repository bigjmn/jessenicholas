import {useState, useEffect} from 'react'
import classes from './Skills.module.css'
// skill logos
import compicon from '../../assets/skillicons/frontendicon.png'
import servericon from '../../assets/skillicons/servericon.png'
import roboticon from '../../assets/skillicons/roboticon.png'
import analyticsicon from '../../assets/skillicons/analyticsicon.png'

const Skills = () => {

  return (
    <div className={classes.outerContainer}>
      <h2>skills</h2>
      <div className={classes.skillsContainer}>

        <div className={classes.skillPair}>

        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={compicon} alt='front-end'></img>
          </div>
          <h4>front-end development</h4>
          <p>I like creating dynamic websites, usually with React, though I’ve also used Vue 3 and of course good ol’ vanilla javascript. Design-wise, I go CSS or Bootstrap 5. </p>
          <p><i>I know my way around the Document Object Mode, or ‘HTML’ for short.
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

        </div>

        <div className={classes.skillPair}>


        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={roboticon} alt='ML'></img>
          </div>
          <h4>Machine Learning</h4>
            <p>Deep learning. Reenforcement learning. Deep reenforcement learning. I use Tensorflow/Keras to compile and train models. Always got an eye out for Markov Chains.
            </p>
            <p><i>Smarter Child and I are still each waiting for the other to apologize.</i></p>
        </div>

        <div className={classes.skillWrapper}>
          <div className={classes.iconWrapper}>
            <img className={classes.skillIcon} src={analyticsicon} alt='analytics'></img>
          </div>
          <h4>Analytics</h4>
          <p>I use statistical inference to analyze data and present it in ways that are clear and meaningful. I can also recognize when data is represented in ways that are biased and misleading. </p>
          <p><i>You could call misleading graphs 'devious plots.' But don't.</i></p>
        </div>

        </div>

      </div>
    </div>
  )
}
export default Skills
