import ShockAndDrawHeader from './projectheaders/ShockAndDrawHeader'
import ShockAndDrawContent from './projectcontent/ShockAndDrawContent'

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
    transition: {delay:0.1, duration:1}
  }
}
const ShockAndDraw = () => {
  return (
    <motion.div variants={defaultVariants} initial="hidden" animate="visible" exit="exit">
      <ShockAndDrawHeader />
      <ShockAndDrawContent />
    </motion.div>

  )


}

export default ShockAndDraw
