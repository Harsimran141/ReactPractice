import { useState } from "react";

function Form(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email} Password: ${password}`);
    }
    const handleClear = (e) =>{
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
    }
    return(
        <div>
<form action="">
<input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" />
<br /><br />
<input type="Email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" />
<br /><br />
<input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password" />
<br /><br />
<button type="submit" onClick={handleSubmit}>Submit</button>

<button onClick={handleClear}>Clear</button>
<p>Live Value: {name}:{email}:{password}</p>
</form>
        </div>
    )
}
export default Form;