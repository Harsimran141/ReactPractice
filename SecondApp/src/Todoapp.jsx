import { useState } from "react";

function Todoapp() {
 const [task,setTask]=useState("");
 const [todos , setTodos] = useState([]);
  return (
    <div className=" bg-green-900 w-56 m-auto h-56 rounded-md justify-center mt-5">
    <h1 className="text-center">My ToDo App</h1>
    <div className="flex gap-1 justify-center ">
     <input type="text" onChange={(e)=>setTask(e.target.value)} className="bg-amber-50 w-38 rounded border border-none" />
     <button className="bg-red-300 rounded p-0.5 text-white font-bold hover:bg-green-600"
     onClick={setTask}
     >Add</button>
   
    </div>
<p className="text-white">{task}</p>
    </div>
  )
}

export default Todoapp;