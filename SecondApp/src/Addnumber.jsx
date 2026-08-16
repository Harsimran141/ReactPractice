import { useState } from "react";

const Addnumber =()=>{
    const [count,SetCount]=useState(1)
    return(
        <div>
<h1>Count={count}</h1>
<button onClick={SetCount()} className="bg-[red] text-white py-1 px-1 rounded shadow-lg">Add</button>
        </div>
    )
}
export default Addnumber;