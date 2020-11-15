import React from 'react'
import './index.css'


const Input  = (props)=>{
    return(
    <input type="text" value={props.value} className="value-holder" />
    )
}

export default Input