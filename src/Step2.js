import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Step2 = props => {
  return (
    <>
      <Container>
        <div className="content__header">
          <h1>Dodaj zdjęcia</h1>
          <p>Stwórz atrakcyjną galerię zdjęć, która przyciągnie gości.</p>
        </div>
        <Row>
          <Col sm={8}>
            <div className="step">
              <div className="step__body">
                <input
                  type="file"
                  name="uploadfile"
                  className="upload"
                  id="img"
                  classame="d-none"
                />
                <label htmlFor="img">
                  <span className="btn btn-secondary">Wgraj zdjęcia</span>
                </label>
              </div>
            </div>
          </Col>
          <div className="col-sm-4 d-flex align-items-center pl-4">
            <img src="/img/photo.png" alt="Room" />
          </div>
        </Row>
        <Row sm={12}>
          <button className="btn" onClick={() => props.handlePrevStep()}>
            Wstecz
          </button>
          <button
            className="btn btn-primary"
            onClick={() => props.handleNextStep()}
          >
            Dalej
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Step2;
