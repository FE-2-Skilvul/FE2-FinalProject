import {Container, Row, Col} from "react-bootstrap"
import HeroImage from '../assets/img/hero2.png'


const HomePage = () => {
  return (
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col>
            <h1>Jaga Lingkungan <br/> Dimulai dari <span>Diri Sendiri</span></h1>
            <p>Adukan segala tindak pelanggaran lingkungan disekitar kamu !!!</p>
            <button>Selengkapnya</button>
          </Col>
          <Col>
            <img src={HeroImage} alt="hero2-img" />
          </Col>
        </Row>
      </Container>
    </header>
    <div className="artikel w-100 min-vh-100"></div>
  </div>
  );
};

export default HomePage;