
function App(){
  const data = "Harsimran Boparai";
  return(
    <div>

   <h1>Welcome React {data}</h1>
   <p>Total = {2+5}</p>
   <button onClick={()=>alert("clicked")}>Click Me</button>
    </div>
  )


}
export default App;
