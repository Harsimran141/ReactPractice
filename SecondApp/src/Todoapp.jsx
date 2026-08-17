import { useState } from "react";

function Todoapp() {
 const [task,setTask]=useState("");
 const [todos , setTodos] = useState([]);
 const addTodo = () =>{
    if(task.trim()===""){
        return;
    }
    setTodos([...todos,task])
 }
  return (
    <div className=" bg-green-900 w-56 m-auto h-56 rounded-md justify-center mt-5">
    <h1 className="text-center">My ToDo App</h1>
    <div className="flex gap-1 justify-center ">
     <input type="text" onChange={(e)=>setTask(e.target.value)} className="bg-amber-50 w-38 rounded border border-none" />
     <button className="bg-red-300 shadow-2xs rounded p-0.5 text-white font-bold hover:bg-green-600"
     onClick={addTodo}
     >Add</button>
   
    </div>
<div>
    {todos.map((value)=>{
        return<p className="text-white" key={value}>{value}
        <button className="bg-red-600 rounded hover:text-black p-0.5 mt-2 font-bold shadow-2xl">Del</button>
        </p>
    })}
</div>
    </div>
  )
}

export default Todoapp;