import {Container, Row, Col, Accordion} from "react-bootstrap"

import {faq} from "../data/index"

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold ">Pertanyaan yang sering ditanyakan pengguna</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow">
                <Accordion.Item eventKey={data.eventKey}>
                  <Accordion.Header>{data.title}</Accordion.Header>
                  <Accordion.Body>
                    {data.desc}
                  </Accordion.Body>
                </Accordion.Item>
                </Accordion>
              </Col>
            )
          })}
          
        </Row>
      </Container>
      
    </div>

  );
};

export default Faq;