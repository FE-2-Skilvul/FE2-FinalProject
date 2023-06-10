import {Container, Row, Col} from "react-bootstrap"
import HeroImage from '../assets/img/hero2.png'
import {artikelTerbaru} from "../data/index"
import {useNavigate} from "react-router-dom"



const HomePage = () => {
  let navigate = useNavigate();

  return (
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center pt-lg-8">
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
        <Row>
          {artikelTerbaru.map((artikel) => {
            return (
            <Col key={artikel.id}>
              <img src={artikel.image} alt="" className="w-100 mb-3 rounded" />
              <h5 className="mb-2 px-3">{artikel.title}</h5>
              <p className="text-muted small mb-4 px-3">{artikel.date}</p>
              <div className=" px-3 pb-3">
                <button className="btn rounded-10 me-2 mb-xs-0 mb-2"
                style={{ backgroundColor: '#0e516d', color: '#ffff' }}>{artikel.readmore}</button>
              </div>
            </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="text-center">
          <button className="btn btn-lg rounded-10 me-2 mb-xs-0 mb-2" onClick={() => navigate("/artikel")}
            style={{ backgroundColor: '#0e516d', color: '#ffff' }}>Lihat Semua Artikel <i className="fa-solid fa-chevron-right ms-1"></i>
          </button>
          
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  );
};

export default HomePage;