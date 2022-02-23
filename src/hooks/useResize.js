import {useState, useEffect} from 'react'
export const useResize = () => {
  const [size, setSize] = useState(undefined)
  useEffect(() => {
    const setscale = () => {
      let canvasScale = window.innerWidth > 1100 ? 600 : 300
      setSize(canvasScale)


    }
    window.addEventListener('resize', setscale)
    setscale()
    return () => window.removeEventListener('resize',setscale)




  }, [size])

  return size
}
