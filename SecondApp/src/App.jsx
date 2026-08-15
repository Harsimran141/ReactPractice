const App = () => {
  let name ="Waris singh";
  let arraydata = [10,20,30,45]; 
  let record ={
    "name":"Waris singh",
    "city":"Amritsar",
    "phone":"12345685"
  }
  let status = true;
  return (
    <div className="main">
      Welcome React
      <h1>{name}</h1>
      {arraydata.map((value)=>{
        return(

          <div>{value}</div>
        ) 
      })}
      <div>{record.city}</div>
      <div>{record.name}</div>
      <div>{record.phone}</div>
      <h1 style={{color:"orange" , backgroundColor:"green"}}>
        { (status)  ? "React App" : ""  }
      </h1>
    </div>
  );
};

export default App;