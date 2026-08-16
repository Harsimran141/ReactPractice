import { useState } from "react";

const Operator =()=>{
    const [show,setShow]=useState(false);
    return(
        <div>
            <h1>Display</h1>
            <button className="bg-[green] text-white  font-bold p-2 rounded shadow-blue-70"
            onClick={()=>setShow(!show)}
            >{show ? "HideBtn" : "ShowBtn"}</button>
       { (show) ?
     <p className="text-5xl bg-blue-400 text-white rounded-2xl">Waris Singh Boparai</p>
     :
     ''
    }


        </div>
    )
}
export default Operator;