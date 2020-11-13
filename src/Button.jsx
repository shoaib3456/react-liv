import React from 'react'
import './index.css'

const arr  = [0,1,2,3,4,5,6,7,8,9,".","+","-","*","/","="]



const Btn  = (val)=>{
    return(
    <button className="btn" >{val}</button>
    )
}

const Button = ()=>{
    return(
        arr.map(Btn)
    )
}
export default Button