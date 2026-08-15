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
      <div>
        { (status)  ? "React App" : ""  }
      </div>
    </div>
  );
};

export default App;