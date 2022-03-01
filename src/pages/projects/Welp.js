import WelpHeader from './projectheaders/WelpHeader'
import WelpContent from './projectcontent/WelpContent'
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
const Welp = () => {
  return (
    <motion.div variants={defaultVariants} initial="hidden" animate="visible" exit="exit">
      <WelpHeader />
      <WelpContent />
    </motion.div>


  )

}

export default Welp
