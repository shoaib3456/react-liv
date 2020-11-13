import React from 'react'
import Button from './Button'
import Input from './Input'
import './index.css'




const App = ()=>{
  return(
  <>
  <div className="container"> 
  <Input/>
    <div className="cal-body">
      <Button/>
    </div>
  </div>
  </>
  )
}



export default App