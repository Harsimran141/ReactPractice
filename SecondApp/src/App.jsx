import { useState } from "react";
import Task from "./Task";
function App(){
  const [show, setShow] = useState(false);
  return(
    <div>
      <h1>Waris singh Boparai (function name App)</h1>
      <button onClick={()=> setShow(!show)}>
        {show ? "Hide" : "show"}
        Details</button>
    {show && <Task/>}
    </div>
  )
}
export default App;