import React from 'react'
import './index.css'

const arr  = [0,1,2,3,4,5,6,7,8,9,".","+","-","*","/","=","Clear"]

const Button = (props)=>{
    return(
        arr.map(function(val){
            return(
            <button key={val} className={"btn" +" "+ val} onClick={props.btnfunc}>{val} </button>
                )
        })
    )
}
export default Button