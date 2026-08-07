import { useState } from "react";

function App(){

  const [name, setName] = useState("Harsimranpal singh");
  const [count,setCount] = useState(0);
  const nameChange = () =>{
    setName("Waris singh Boparai")
  }
  return(
   <div className="App">
    <h1>Name:-{name}</h1>
    <h1>Count={count}</h1>
    <button onClick={nameChange}>Click Change Button</button>
     <button onClick={() => setCount(count+1)}>Increment</button>
     <button onClick={()=> setCount(count -1)}>Decrement</button>
     <button onClick={()=> setCount(0)}>Reset</button>
  </div>

  
  );
}
export default App;