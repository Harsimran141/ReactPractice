function App(){
  return(
    <div>
      <h1>Welcome to React app{abc()}</h1>
      <p>This is a simple react application.</p>
      <User/>
     
    </div>
  )
}
function User(){
  return(
    <div>
      <h1>Boparai</h1>
    <p>Jarmanjit singh</p>
    </div>
  )
}
function abc(){
  return(

    <div>
    <h1>Amritsar</h1>
    <p>Chattiwind</p>
  </div>
  )
}
export default App;