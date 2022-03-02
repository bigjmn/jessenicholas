import {useState, useEffect} from 'react'
export const useMobile = () => {
  const [mobile, setMobile] = useState(undefined)

  useEffect(() => {
    const checkMobile = () => {
      let isMobile = window.innerWidth < 700
      setMobile(isMobile)


    }
    window.addEventListener('resize', checkMobile)
    checkMobile()
    return () => window.removeEventListener('resize',checkMobile)




  }, [])

  return mobile
}
