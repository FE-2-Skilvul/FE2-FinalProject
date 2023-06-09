import {Container, Row, Col} from "react-bootstrap"
import HeroImage from '../assets/img/hero2.png'


const HomePage = () => {
  return (
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">Jaga Lingkungan <br/> Dimulai dari <span>Diri Sendiri</span></h1>
            <p className="mb-4">Adukan segala tindak pelanggaran lingkungan disekitar kamu !!!</p>
            <button className="btn btn-lg rounded-10 me-2 mb-xs-0 mb-2"
            style={{ backgroundColor: '#144458', color: '#ffff' }} >Selengkapnya</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero2-img" />
          </Col>
        </Row>
      </Container>
    </header>
    <div className="artikel w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Artikel Terbaru</h1>
            <p className="text-center" style={{color: '#231942'}}>Kumpulan Artikel Lingkungan Yang Bisa Anda Baca</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  );
};

export default HomePage;