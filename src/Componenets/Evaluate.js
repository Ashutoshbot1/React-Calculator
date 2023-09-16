// import React from "react";
import App from "../App";


const Evaluate =(e)=>{

    let [result,setResult]="aaa";

    const oper=e.target.innerText;
    console.log(oper);

    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;

    switch(oper){
        case "ADD":
            setResult=Number(num1)+Number(num2);
            console.log(result);
            break;
        
        case "SUBTRACT":
            result=Number(num1)-Number(num2);
            console.log(result);
            break;

        case "MULTIPLY":
            result=Number(num1)*Number(num2);
            console.log(result);
            break;
            
        case "DIVIDE":
            result=Number(num1)/Number(num2);
            console.log(result);
            break; 
        
        default:
    }

    return(
        <div>

            <div className="errorbox my-2 mx-5" style={{fontWeight:"700", fontSize:"1.5rem",color:"red", textTransform:"capitalize"}}>{}</div>
            <div className="resultbox" style={{fontSize:"1.5rem"}}><b>Result: {result}</b></div>
        </div>
    )

}

export default Evaluate;