import Practice from "./Practice";

function App(){
  const showAlert = ()=>{
    alert("Hello waris singh");
  }
  return(
    <div>
<h1>Hello React </h1>
   <p>Welcome to my website.</p>
   <img src="https://media.istockphoto.com/id/833710244/photo/red-squirell.jpg?s=170667a&w=0&k=20&c=3uUjnCSJkDDMSZ6Xb_h6fefYxoFeya43QPkPH8XlWsM=" alt="placeholder Image" 
   width ="300"
   />
   <br />
   <button onClick={showAlert}>Click Pic</button>
    <Practice/>
    </div>
    
  )


}
export default App;
