import React, { useEffect } from 'react'
import List from './List'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=>{
    const tiemout = setTimeout(()=> {
      removeAlert()
    }, 3000)
    return () => clearTimeout(tiemout)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert