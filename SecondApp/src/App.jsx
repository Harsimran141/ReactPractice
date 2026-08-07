
function App(){
  const data = "Harsimran Boparai";
  let a=20;
  let b =30;
  let isLoggedIn = false;
  let waris = {
    name:"Waris singh",
    age: 2,
  };
  let fruits =["apple","banana","orange"]
  return(
    <div>

   <h1>Welcome React {data}</h1>
   <p>Total = {2+5}</p>
   <button onClick={()=>alert("clicked")}>Click Me</button>
    <p>A+B is = {a+b}</p>
    <p>{isLoggedIn ? "Welcome React" : "Please log in"}</p>
    <p>{waris.name} is {waris.age} yers old</p>
    <p>{fruits[0]} is my favorite fruite</p>
    <h1>Fruits List</h1>
    {fruits.map((fruit, index)=>(

      <p key={index}>{fruit}</p>
    ))}
    </div>
    
  )


}
export default App;
