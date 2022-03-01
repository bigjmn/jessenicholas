import {useState} from 'react'
import classes from './MessageBox.module.css'

const MessageBox = ({reverse, redacted}) => {
  const [messages, setMessages] = useState([])
  const [messageVal, setMessageVal] = useState('')

  const handleChange = (e) => {
    setMessageVal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (messageVal){
      let newmessage = messageVal
      if (reverse){
        newmessage = newmessage.split('').reverse().join('')
      }
      newmessage = redacted ? 'REDACTED' : newmessage


      setMessages(oldmessages => [...oldmessages, newmessage])
      setMessageVal('')
    }
  }

  return (
    <div className={classes.outerContainer}>
      <div className={classes.messagesWrapper}>
        {messages.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} placeholder='enter guess' value={messageVal}/>
      </form>
    </div>
  )
}
export default MessageBox
