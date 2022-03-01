import classes from './HeaderStyles.module.css'
import welpheader from '../../../assets/welpheader.png'
const WelpHeader = () => {

  return (
    <div className={classes.welpHeader}>
      <img width='60%' style={{marginLeft:'auto', marginRight:'auto'}} height='auto' src={welpheader} alt='welp'></img>

    </div>
  )
}
export default WelpHeader
