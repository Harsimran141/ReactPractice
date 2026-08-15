const App = () => {
  let name ="Waris singh";
  let arraydata = [10,20,30,45]; 
  return (
    <div className="font-bold text-blue-900">
      Welcome React
      <h1>{name}</h1>
      {arraydata.map((value)=>{
        return(

          <div>{value}</div>
        ) 
      })}
    </div>
  );
};

export default App;