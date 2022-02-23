import {useState, useEffect} from 'react'
import classes from './HeaderStyles.module.css'
import CanvasArea from '../../../components/canvasarea/CanvasArea'

const ShockAndDrawHeader = () => {

  return (
    <div className={classes.headerContainer}>
      <CanvasArea />
    </div>
  )
}
export default ShockAndDrawHeader
