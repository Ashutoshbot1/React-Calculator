
import { useState } from "react";


function App() {
  
  const [result,setResult]=useState("");

  const [error,setError]=useState("");
  const[success,setSuccess]=useState("");
  
  function evaluate(e){


    const oper=e.target.innerText;
    // console.log(oper);

    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
      // document.querySelector(".errorbox").display="block"
      setError("please input Valid Number");
      setResult("");
      setSuccess("")

      return;
    }

    if(num1<0 || num2<0){
      setError("please input Positive Number");
      setResult("");
      setSuccess("")
      return;
    }

    if(num2===0 && oper==="DIVIDE" ){
      setError("numerator cannot be 0");
      setResult("");
      setSuccess("")
      return;
    }



    setError("")
    setSuccess("Success");



    switch(oper){
        case "ADD":
            setResult(Number(num1)+Number(num2));
            // console.log(result);
            break;
        
        case "SUBTRACT":
            setResult(Number(num1)-Number(num2));
            // console.log(result);
            break;

        case "MULTIPLY":
            setResult(Number(num1)*Number(num2));
            // console.log(result);
            break;
            
        case "DIVIDE":
            setResult(Number(num1)/Number(num2));
            // console.log(result);
            break; 
        
        default:
    }

  }
  

  return (
    <>
      

      <div className="card container my-5 p-4"style={{width:"22rem"}}>
        <h2 style={{textAlign:"center"}}>React Calculator</h2>
        <input type="text" id="num1" className="mt-4 px-3" placeholder="Num 1"/>
        <input type="text" id="num2" className="my-4 px-3" placeholder="Num 2"/>

        <button type="button" className="btn my-1 btn-dark" onClick={evaluate}>ADD</button>
        <button type="button" className="btn my-1 btn-dark" onClick={evaluate}>SUBTRACT</button>
        <button type="button" className="btn my-1 btn-dark" onClick={evaluate}>MULTIPLY</button>
        <button type="button" className="btn my-1 btn-dark" onClick={evaluate}>DIVIDE</button>

        <div className="errorbox my-2" style={{fontWeight:"400", fontSize:"1rem",color:"red", textTransform:"capitalize"}}>{error}</div>
        <div className="successbox " style={{color:"green", margin:"auto" ,fontSize:"1.5rem",fontWeight:"700"}}>{success}</div>
        <div className="resultbox" style={{fontSize:"1.5rem"}}><b>Result: {result}</b></div>

        

      </div>
    </>
  );
}

export default App;
