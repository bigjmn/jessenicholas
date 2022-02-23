import {useState, useEffect} from 'react'
import classes from './Palette.module.css'

const Palette = ({setColor, setThickness, fiftyshades, fathands}) => {
  const [colors, setColors] = useState(['black','red','green','blue','yellow','white'])
  const [localColor, setLocalColor] = useState('black')


  const handleColor = (e) => {
    setColor(e.target.value)
    setLocalColor(e.target.value)


  }
  const handleSize = (e) => {
    setThickness(e.target.value)
  }
  useEffect(() => {
    if (fiftyshades){
      setColor('black')
      setColors(['#000','#333','#666','#999','#ccc','fff'])
    }
    if (!fiftyshades){
      setColors(['black','red','green','blue','yellow','white'])
    }
  }, [fiftyshades])

  useEffect(() => {
    if (fathands){
      setThickness(18)

    }
  }, [fathands])


  return (
    <div>
      <div className={classes.colorsContainer}>
        {colors.map((col, i) => (
          <button key={i} className={classes.colorbutton} value={col} style={{width:'40px',height:'40px',backgroundColor:col, border: col==localColor ? '2px black solid' : '2px white solid'}}
             onClick={handleColor} />
        ))}
        <button disabled={fathands} value={6} onClick={handleSize}>small</button>
        <button disabled={fathands} value={12} onClick={handleSize}>med</button>
        <button value={18} onClick={handleSize}>fat</button>
      </div>

    </div>
  )
}
export default Palette
