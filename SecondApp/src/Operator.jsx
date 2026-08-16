import { useState } from "react";

const Operator =()=>{
    const [show,setShow]=useState(false);
    return(
        <div>
            <h1>Display</h1>
            <button className="bg-[green] text-white font-bold p-2 rounded shadow-lg">Show</button>
       { (show) ?
     <p>Waris Singh Boparai</p>
     :
     ''
    }


        </div>
    )
}
export default Operator;