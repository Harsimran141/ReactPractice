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
 const editTodo = (index)=> {
    const newTask = prompt("Enter new task");
    if(newTask === null || newTask.trim() === ""){
        return;
    }
    const updateTodos = todos.map((item,i)=>
    i === index ? newTask : item
);
setTodos(updateTodos);
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
    {todos.map((value,index)=>{
        return(<p className="text-white" key={index}>{value}
        <div className="flex gap-1">

        <button onClick={()=>setTodos(todos.filter((items,i)=>i !==index))} 
        className="bg-red-600 rounded hover:text-black p-0.5  
        font-bold shadow-2xl">Del</button>
        <button onClick={()=>editTodo(index)} className="bg-green-600 rounded font-bold
         p-0.5 hover:bg-amber-300 text-blue-800">Edit</button>
        </div>
        </p>)

    })}
</div>
    </div>
  )
}

export default Todoapp;