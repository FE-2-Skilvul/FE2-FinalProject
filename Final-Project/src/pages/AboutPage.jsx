import {Container, Row, Col} from "react-bootstrap"
import Faq from "../components/Faq";


const AboutPage = () => {
  return (
  <div className="about-page">
    <div className="about min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center mb-2 ">About</h1>
          <p className="text-center"> Tentang kami</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  );
};

export default AboutPage;