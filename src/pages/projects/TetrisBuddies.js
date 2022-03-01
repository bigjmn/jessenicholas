import TetrisBuddiesHeader from './projectheaders/TetrisBuddiesHeader'
import TetrisBuddiesContent from './projectcontent/TetrisBuddiesContent'
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
    transition: {delay:0.2, duration:1.5}
  }
}
const TetrisBuddies = () => {
  return (
    <motion.div variants={defaultVariants} initial="hidden" animate="visible" exit="exit">
      <TetrisBuddiesHeader />
      <TetrisBuddiesContent />
    </motion.div>

  )

}

export default TetrisBuddies
