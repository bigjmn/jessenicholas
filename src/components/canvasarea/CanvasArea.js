import {useState, useEffect, useRef} from 'react'
import classes from './CanvasArea.module.css'
// import {useResize} from '../../hooks/useResize'
import {throttled} from '../../helpers'
import Palette from '../palette/Palette'
import MessageBox from '../messagebox/MessageBox'

const CanvasArea = () => {

  const drawCanRef = useRef(null)
  const guessCanRef = useRef(null)

  const peepingcanRef = useRef(null)

  const [ctx, setCtx] = useState({})
  const [dtx, setDtx] = useState({})

  const [ptx, setPtx] = useState({})
  const [peeping, setPeeping] = useState(false)

  const [color, setColor] = useState('#000')
  const [thickness, setThickness] = useState(6)

  const [position, setPosition] = useState({x:0,y:0})
  const [drawing, setDrawing] = useState(false)

// draw attacks
  const [fiftyshades, setFiftyshades] = useState(false)
  const [fathands, setFathands] = useState(false)
  const [hiddenmouse, setHiddenmouse] = useState(false)
  const [fader, setFader] = useState(false)
// guess attacks
  const [redacted, setRedacted] = useState(false)
  const [reverse, setReverse] = useState(false)
  const [peepingtom, setPeepingtom] = useState(false)
  const [pointillism, setPointillism] = useState(false)

  //attack handlers
  const handleShades = () => setFiftyshades(x => !x)
  const handleFathands = () => setFathands(x => !x)
  const handleHiddenmouse = () => setHiddenmouse(x => !x)
  const handleFader = () => setFader(x => !x)
  const handleRedacted = () => setRedacted(x => !x)
  const handleReverse = () => setReverse(x => !x)
  const handlePeepingtom = () => setPeepingtom(x => !x)
  const handlePointillism = () => setPointillism(x => !x)



  const canvasSize = 300

  useEffect(() => {
    console.log('resetting')
    let drawCan = drawCanRef.current
    let guessCan = guessCanRef.current
    let drawCtx = drawCan ? drawCan.getContext('2d') : null
    let guessCtx = guessCan ? guessCan.getContext('2d') : null
    if (drawCtx && guessCtx){
      drawCtx.lineJoin = 'round'
      drawCtx.lineCap = 'round'
      guessCtx.lineJoin='round'
      guessCtx.lineCap='round'
      drawCtx.lineWidth = 14
      guessCtx.lineWidth=14

    }

    setCtx(drawCtx)
    setDtx(guessCtx)
  }, [ctx, dtx])

  useEffect(() => {
    let fadeint = null
    if (fader){
      fadeint = setInterval(() => {
        [ctx, dtx].forEach(c => {
          c.fillStyle = 'rgb(255,255,255,0.03)'
          c.fillRect(0,0,600,600)

        })
      }, 50)
    }
    return () => fadeint ? clearInterval(fadeint) : null
  }, [fader])

  const handleMouseDown = (e) => {
    setDrawing(true)
    setPosition({x: parseInt(e.nativeEvent.offsetX), y: parseInt(e.nativeEvent.offsetY)})
    let payload = {
      centerX: position.x,
      centerY: position.y,
      radius: thickness/2,
      color: color
    }
    handleDot(payload)
    if (pointillism){
      setDrawing(false)
    }
  }
  const handleMouseMove = (e) => {
    let mousex = e.nativeEvent.offsetX
    let mousey = e.nativeEvent.offsetY
    if (drawing){
      let payload = {
        oldx: position.x,
        oldy: position.y,
        newx: mousex,
        newy: mousey,
        thickness: thickness,
        color: color

      }
      handleLine(payload)
    }
    setPosition({x: mousex, y: mousey})
  }
  const handleMouseUp = () => {
    setDrawing(false)
  }
  const throttledMove = throttled(50, handleMouseMove)



  const handleLine = (payload) => {
    if (ctx && dtx){
      [ctx, dtx].forEach(c => {
        c.strokeStyle = payload.color
        c.lineWidth = payload.thickness
        c.beginPath()
        c.moveTo(payload.oldx, payload.oldy)
        c.lineTo(payload.newx, payload.newy)
        c.stroke()
      })
    }
  }
  const handleDot = (payload) => {
    if (ctx && dtx){
      [ctx, dtx].forEach(c => {
        c.fillStyle = payload.color
        c.beginPath()
        c.moveTo(payload.centerX, payload.centerY)
        c.arc(payload.centerX, payload.centerY, payload.radius, 0, 2*Math.PI)
        c.fill()
      })
    }
  }

  useEffect(() => {
    let peepCan = peepingcanRef.current
    if (peepCan){
      let peepcontext = peepCan.getContext('2d')
      peepcontext.fillRect(0,0,300,300)
      setPtx(peepcontext)
    }
  }, [peepingtom])

  const openPeep = (e) => {
    if (ptx){
      setPeeping(true)
      let peepx = e.nativeEvent.offsetX
      let peepy = e.nativeEvent.offsetY
      ptx.fillRect(0,0,600,600)
      ptx.clearRect(peepx-90, peepy-90, 180, 180)
    }
  }
  const movePeep = (e) => {
    if (ptx && peeping){
      let peepx = e.nativeEvent.offsetX
      let peepy = e.nativeEvent.offsetY
      ptx.fillRect(0,0,600,600)
      ptx.clearRect(peepx-90, peepy-90, 180, 180)
    }
  }
  const closePeep = () => {

    if (ptx){
      setPeeping(false)
      ptx.fillRect(0,0,600,600)
    }
  }

  return (
    <div className={classes.headerWrapper}>

    <div className={classes.outerContainer}>
      {canvasSize && <div className={classes.canvasHolder} style={{width:canvasSize,height:canvasSize}}>
        <canvas ref={drawCanRef} onMouseDown={handleMouseDown} onMouseMove={throttledMove} onMouseUp={handleMouseUp} width={canvasSize} height={canvasSize} style= {{position:'absolute', top:'0px',left:'0px',border:'1px solid'}}></canvas>
      </div>}
      {canvasSize && <div className={classes.canvasHolder} style={{width:canvasSize,height:canvasSize}}>
        <canvas ref={guessCanRef} width={canvasSize} height={canvasSize} style= {{position:'absolute',top:'0px',left:'0px',border:'1px solid'}}></canvas>
        {peepingtom && <canvas ref={peepingcanRef} onMouseDown={openPeep} onMouseMove={movePeep} onMouseUp={closePeep} width={canvasSize} height={canvasSize} style= {{position:'absolute', zIndex:'2', top:'0px',left:'0px',border:'1px solid'}}></canvas>}
      </div>}
      <MessageBox reverse={reverse} redacted={redacted} />
    </div>
    <Palette setColor={setColor} setThickness={setThickness} fiftyshades={fiftyshades} fathands={fathands}/>
    <div className={classes.attackHolder}>
      <button className={fiftyshades ? classes.activeAttack : classes.passiveAttack} onClick={handleShades}>Fifty Shades</button>
      <button className={fathands ? classes.activeAttack : classes.passiveAttack} onClick={handleFathands}>Johnny Fat Hands</button>
      <button className={hiddenmouse ? classes.activeAttack : classes.passiveAttack} onClick={handleHiddenmouse}>Hidden Mouse</button>
      <button className={fader ? classes.activeAttack : classes.passiveAttack} onClick={handleFader}>Fadin Frank</button>
      <button className={redacted ? classes.activeAttack : classes.passiveAttack} onClick={handleRedacted}>Classified</button>
      <button className={reverse ? classes.activeAttack : classes.passiveAttack} onClick={handleReverse}>esreveR</button>
      <button className={peepingtom ? classes.activeAttack : classes.passiveAttack} onClick={handlePeepingtom}>Peeping Tom</button>
      <button className={pointillism ? classes.activeAttack : classes.passiveAttack} onClick={handlePointillism}>Pointillism</button>
    </div>
    </div>
  )
}
export default CanvasArea
