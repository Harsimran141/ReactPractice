import ChildCom from "./ChildCom";

function App(){
  const name = "Jarmanjir singh";
  const age = 28;
  return(
    <div>
      
    {/* <ChildCom name={name} age={age}/> */}
    {/* <ChildCom person={{name:"Kumar Sonu", age:28}}/> */}
    <ChildCom person={["vikas","Rohit"]} />
    </div>
  )
}
export default App;