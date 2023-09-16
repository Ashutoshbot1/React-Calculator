import React from "react"
// import Display from "./Display"
import Evaluate from "./Evaluate"

const Button=(props)=>{

    return(
        <>
            <button type="button" className="btn my-1 btn-dark" onClick={Evaluate}></button>
        </>
    )
}




export default Button