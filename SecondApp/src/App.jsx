import Footer from "./Footer";
import Header from "./Header";

const App = () => {

  return (
    <div>
      {/* <h1>React App</h1> */}
      <Header/>
      <Footer/>
      <div className="row">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />
      </div>
</div>
  )
};

export default App;

function Card(){
  return(
    <div className="cardItems">Card Div</div>
  )
}