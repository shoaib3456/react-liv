import React, { useEffect, useState } from 'react'
import Button from './Button'
import Input from './Input'
import './index.css'




const App = ()=>{
  useEffect(()=>{
    console.log("hello i am rendering ")
  })
  const BtnFunc = (event)=>{

    if(event.target.innerText!="Clear" && event.target.innerText!="="  && val!="Syntax Error"){
    setVal(val+event.target.innerText) 
    }
    if( val=="Syntax Error"){
      setVal("")
    }
    else if( event.target.innerText=="Clear"){
      setVal("")
    }
    else if( event.target.innerText=="="){
  
      try{
        let mathVal  = eval(val)
        setVal(mathVal)
      }
    catch(e){
        setVal("Syntax Error")
      }
    }
    
  }
  const [val,setVal] = useState("")
    
  
  return(
  <>
  <div className="container"> 
  <Input value = {val}/>
    <div className="cal-body">
      <Button btnfunc={BtnFunc}/>
    </div>
  </div>
  </>
  )


}



export default App