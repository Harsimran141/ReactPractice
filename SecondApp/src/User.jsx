import { useState } from "react";

const User = (e) =>{
    const [name,setName] = useState("");
    const HandleChange = (e)=>{
        setName(e.target.value);
    }
    return(
        <div>
        <input type="text" value={name} 
        onChange={HandleChange} placeholder="Enter Name" />
        <h1>Input Value Show :-{name}</h1>
             <button onClick={()=>setName("")}>ClearBtn</button>
    </div>
    )
}
export default User;