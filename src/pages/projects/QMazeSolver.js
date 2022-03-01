import QMazeSolverHeader from './projectheaders/QMazeSolverHeader'
import QMazeSolverContent from './projectcontent/QMazeSolverContent'
import {motion} from 'framer-motion'
const defaultVariants = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity: 1,
    transition: {delay:0.2,duration:1}
  },
  exit:{
    opacity:0,
    transition: {delay:0.2, duration:1}
  }
}
const QMazeSolver = () => {
  return (
    <motion.div variants={defaultVariants} initial="hidden" animate="visible" exit="exit">
      <QMazeSolverHeader />
      <QMazeSolverContent />
    </motion.div>


  )

}

export default QMazeSolver
