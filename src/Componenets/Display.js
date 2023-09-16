import React from"react"
// import Evaluate from "./Evaluate"

const Display=(props)=>{

    return(
    <>  <div>

            <div className="errorbox my-2 mx-5" style={{fontWeight:"700", fontSize:"1.5rem",color:"red", textTransform:"capitalize"}}>{props.error}</div>
            <div className="resultbox" style={{fontSize:"1.5rem"}}><b>Result: {}</b></div>
        </div>
    </>
    )
}

export default Display