import { useState } from "react";

const App = () => {
  
let Display=()=>{
  alert("Welcome")
}
let n=10;
let Addnumber =(a,b)=>{
  console.log(a+b);
  n=n+1;
  console.log(n);
  
}
  return (
    <div>
   
<h2>React App </h2>
   <button onClick={Display} className="bg-[red] px-2 py-2 rounded text-white border-1px shadow-lg border-rarious-2px">Add</button>  
  <button onClick={()=>Addnumber(2,4)} className="bg-[blue] text-white rounded px-4"  >AddNum</button>
</div>
  )
};

export default App;

