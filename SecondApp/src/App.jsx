import Footer from "./Footer";
import Header from "./Header";

const App = () => {

  return (
    <div>
      {/* <h1>React App</h1> */}
      <Header/>
      <Footer/>
      <Card/>
    </div>
  )
};

export default App;

function Card(){
  return(
    <div>Card</div>
  )
}