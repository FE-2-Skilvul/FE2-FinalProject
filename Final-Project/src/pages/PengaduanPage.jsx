import {Container, Row, Col} from 'react-bootstrap'

const PengaduanPage = () => {
  return(
  <div className='pengaduan'>
    <Container>
      <Row className='mb-10'>
        <Col>
          <h1 className='text-center fw-bold'>Form Pengaduan</h1>
          <p className='text-center'>Mohon isi formulir berikut sesuai dengan pelanggaran lingkungan yang terjadi di daerah kamu</p>
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