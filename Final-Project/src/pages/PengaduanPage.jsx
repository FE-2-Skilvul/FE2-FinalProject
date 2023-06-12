import {Container, Row, Col} from 'react-bootstrap'

const PengaduanPage = () => {
  return(
  <div className='pengaduan'>
    <Container>
      <Row className='mb-10'>
        <Col>
          <h1 className='text-center fw-bold animate__animated animate__fadeInUp'>Form Pengaduan</h1>
          <p className='text-center animate__animated animate__fadeInUp'>Mohon isi formulir berikut sesuai dengan pelanggaran lingkungan yang terjadi di daerah kamu</p>
        </Col>
      </Row>
      <Row>

        {/* ISI SAMA FORM YANG UDAH KAMU BUAT */}

      </Row>
    </Container>
  </div>
  
  );
};

export default PengaduanPage;