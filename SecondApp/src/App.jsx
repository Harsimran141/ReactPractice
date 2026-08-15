import Footer from "./Footer";
import Header from "./Header";
import {Col, Container, Row} from 'react-bootstrap'
const App = () => {

  return (
    <div>
      {/* <h1>React App</h1> */}
      <Header/>
<Container fluid>

<Container>
  <Row>
    <Col className="col-12">
    Welcome react
    </Col>
  </Row>
</Container>
</Container>
       <Footer/>
       <Card/>
</div>
  )
};

export default App;

function Card(){
  return(
    <div className="cardItems">Card Div</div>
  )
}