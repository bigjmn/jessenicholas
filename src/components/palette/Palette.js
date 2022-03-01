import {useState, useEffect} from 'react'
import classes from './Palette.module.css'
import trashicon from '../../assets/trashicon.png'
import dotsvg from '../../assets/black-circle-svgrepo-com.svg'
const Palette = ({setColor, setThickness, fiftyshades, fathands, clearcanvas}) => {
  const [colors, setColors] = useState(['black','red','green','blue','yellow','white'])
  const [localColor, setLocalColor] = useState('black')
  const [localsize, setLocalsize] = useState(6)


  const handleColor = (e) => {
    setColor(e.target.value)
    setLocalColor(e.target.value)


  }
  const handleSize = (thick) => {
    console.log('button clicked')
    setThickness(thick)
    setLocalsize(thick)

  }
  const handleClear = () => {
    clearcanvas()
  }
  useEffect(() => {
    if (fiftyshades){
      setColor('black')
      setLocalColor('black')
      setColors(['black','#333','#666','#999','#ccc','fff'])
    }
    if (!fiftyshades){
      setColors(['black','red','green','blue','yellow','white'])
    }
  }, [fiftyshades])

  useEffect(() => {
    if (fathands){
      setThickness(18)
      setLocalsize(18)

    }
  }, [fathands])


  return (
    <div style={{padding:'5px'}}>
      <div className={classes.colorsContainer}>
        {colors.map((col, i) => (
          <button key={i} className={classes.colorbutton} value={col} style={{margin: '2px', width:col==localColor ? '50px' : '40px',height: col==localColor ? '50px' : '40px',backgroundColor:col, border: '2px black solid'}}
             onClick={handleColor} />
        ))}
        <button className={classes.sizebutton} disabled={fathands} value={6} onClick={() => handleSize(6)} style={{border: localsize == 6 ? '1px black solid' : '1px white solid'}}><img src={dotsvg} width='50%' alt='small brush'></img></button>
        <button className={classes.sizebutton} disabled={fathands} value={12} onClick={() => handleSize(12)} style={{border: localsize == 12 ? '1px black solid' : '1px white solid'}}><img src={dotsvg} width='70%' alt='mid brush'></img></button>
        <button className={classes.sizebutton} value={18} onClick={() => handleSize(18)} style={{border: localsize == 18 ? '1px black solid' : '1px white solid'}}><img src={dotsvg} alt='fat brush'></img></button>
        <button onClick={handleClear} style={{backgroundColor:'white', border:'none'}}><img width='30px' height='auto' src={trashicon}></img></button>
      </div>

    </div>
  )
}
export default Palette
