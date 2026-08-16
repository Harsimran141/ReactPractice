import { useState } from "react";

const App = ()=>{
  const [count,setCount] = useState(0)
  console.log(count);
  
  return(
    <div>
      <h1>React App</h1>
       <h2>Count={count}</h2>
       <button onClick={()=>setCount(count+1)}
        className="bg-[red] text-white py-1 px-1 rounded shadow-lg font-bold"
        >+</button>
        <button onClick={()=>setCount(count-1)}
          className="bg-[blue] text-white
          shadow-lg font-bold my-10px
          px-1 py-1 rounded"
          >-</button>
    </div>
  )
}
export default App;

