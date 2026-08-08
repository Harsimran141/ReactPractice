import { useState } from "react";

function App(){
  const [name,setName] = useState("");
  const handleChange = (e)=>{
    setName(e.target.value);
  }
  return(
<div>
<h2>Harsimranpal singh React developer</h2>
<input type="text" value={name} 
onChange={handleChange}
placeholder="Enter Name" />
<button onClick={()=>setName("")}>Clear</button>
<h1>Live Preview:- {name}</h1>
</div>
  )
}
export default App;