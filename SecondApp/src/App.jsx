import Hobby from "./Hobby";

function App(){
  let hobbys = ["Reading","Writting","Gamming"];
  return(
    <div>
      <Hobby name="Harsimranpal singh"
              age={28}
              city="Brampton"
              hobbies={hobbys}
      />
    </div>
  );
}
export default App;