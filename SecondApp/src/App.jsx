import Footer from "./Footer";
import Header from "./Header";
import {Col, Container, Row} from 'react-bootstrap'
const App = () => {

  return (
    <div>
      {/* <h1>React App</h1> */}
      <Header email="Admin@gmail.com" phone="2589632145" />
<Container fluid>

<Container>
  <Row>
    <Col className="col-12 text-center">
    Welcome react
    </Col>
  </Row>
</Container>
</Container>
       <Footer/>
     
</div>
  )
};

export default App;

