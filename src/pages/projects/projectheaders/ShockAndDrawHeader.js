import classes from './HeaderStyles.module.css'
import CanvasArea from '../../../components/canvasarea/CanvasArea'

const ShockAndDrawHeader = () => {

  return (
    <div className={classes.headerContainer}>
      <h1>Shock and Draw</h1>
      <CanvasArea />
    </div>
  )
}
export default ShockAndDrawHeader
