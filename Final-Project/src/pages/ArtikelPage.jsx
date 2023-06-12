import {Container, Row, Col} from "react-bootstrap"
import { semuaArtikel } from "../data";

const ArtikelPage = () => {
  return ( 
    <div className="artikel-page">  
      <div className="artikel min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Artikel</h1>
              <p className="text-center animate__animated animate__fadeInUp">Kumpulan Artikel Lingkungan Yang Bisa Anda Baca</p>
            </Col>
          </Row>
          <Row>
{/* MISAL MAU HAPUS KONTEN GANTI BARU AWALANE DARI SINI AJA */}
          {semuaArtikel.map((artikel) => {
            return (
              <Col key={artikel.id} className="shadow rounded">
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
{/* AKHIR HAPUS KONTEN SAMPE SINI  */}
          </Row>
        </Container>

      </div>
    </div>
  ); 
};

export default ArtikelPage;