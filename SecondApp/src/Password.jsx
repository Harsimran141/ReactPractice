import { useState } from "react";

 const Password=()=>{
    const [password,setPassword] = useState(false);
    return(
        <div className="flex gap-4 mt-10">
            <h3>Password :-</h3>
<input type={password ? 'text' : 'password'}
className=" bg-blue-300 rounded-md"
/>
<button className="bg-emerald-900 rounded text-white px-0.5 border-none mr-2.5rem"
onClick={()=>setPassword(!password)}
>{password ? 'PHide' : 'PShow'}</button>
        </div>
    )
 }
 export default Password;