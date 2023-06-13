import { Container, Row, Col } from "react-bootstrap";
import Artikel1 from "../assets/img/artikel/edukasi-1.jpg";
import Artikel2 from "../assets/img/artikel/edukasi2.jpg";
import Artikel3 from "../assets/img/artikel/edukasi3.jpg";
import Artikel4 from "../assets/img/artikel/edukasi4.jpg";
import Artikel5 from "../assets/img/artikel/edukasi5.jpg";
import Artikel6 from "../assets/img/artikel/edukasi6.jpg";
import Artikel7 from "../assets/img/artikel/edukasi7.jpg";
import Artikel8 from "../assets/img/artikel/edukasi8.jpg";
import Artikel9 from "../assets/img/artikel/edukasi9(1).jpeg";
import Artikel10 from "../assets/img/artikel/edukasi8(1).jpeg";

const ArtikelPage = () => {
  return (
    <div className="artikel-page">
      <div className="artikel min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">
                Semua Artikel
              </h1>
              <p className="text-center animate__animated animate__fadeInUp">
                Kumpulan Artikel Lingkungan Yang Bisa Anda Baca
              </p>
            </Col>
          </Row>
          <Row>
            <div class="artikel" id="artikel">
              <div class="container">
                <div class="box-artikel">
                  <div class="box">
                    <img src={Artikel1} alt="" />
                    <h3>Mengurangi Penggunaan Sampah Sehari-hari</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/mengurangi-sampah-sehari-hari.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel2} alt="" />
                    <h3>Giat Melakukan Reboisasi Pada Lingkungan Sekitar</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/giat-melakukan-reboisasi.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel3} alt="" />
                    <h3>Kreatif!! Olah Sampah Plastik Jadi Bata</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/olah-sampah-plastik-jadi-bata.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel4} alt="" />
                    <h3>Ketahui Sampah Sesuai Jenis-Jenisnya</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/pilah-sampah-sebelum-dibuang.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel5} alt="" />
                    <h3>Menyulap Limbah Plastik Menjadi BBM</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/sulap-limbah-plastik-jadi-bbm.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel6} alt="" />
                    <h3>Pemanfaatan Limbah Plastik Menjadi Paving</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/limbah-plastik-menjadi-paving.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel7} alt="" />
                    <h3>Pilah Sampah Organik dan Non Organik</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/pilah-sampah-organik-dan-non-organik.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel10} alt="" />
                    <h3>Ayo Sulap Botol Kaca Menjadi Vas Bunga</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/sulap-botol-kaca-menjadi-vas-bunga.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                  <div class="box">
                    <img src={Artikel9} alt="" />
                    <h3>Sulap Stik Eskrim Menjadi Kerajinan Tangan</h3>
                    <button>
                      <a
                        href="https://mengurangisampahseharihari.blogspot.com/2023/06/sulap-stik-eskrim-menjadi-kerajinan.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Detail
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ArtikelPage;
