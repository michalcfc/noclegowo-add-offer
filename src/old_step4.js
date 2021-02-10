import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const Step2 = props => {
  const rooms = props.rooms.map((g, id) => {
    return (
      <>
        {props.isEditMode ? (
          props.renderEditMode(id)
        ) : (
          <div className="card" key={id}>
            <div className="card-body">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div> {g.name} </div>
                <div>
                  <button
                    className="btn"
                    onClick={e => props.handleEditMode(e, g.id)}
                  >
                    {" "}
                    <CreateIcon />
                  </button>
                  <button
                    className="btn"
                    onClick={() => props.handleRemove(g.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  });
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <div className="content__header">
              <h1>Informacje o pomieszczeniach</h1>
              <p>
                Dodaj pomieszczenia, które wynajmujesz w Twoim obiekcie. <br />
                Może to być pokój, apartament, domek itp.
              </p>
            </div>
            <div>
              <Col
                sm={12}
                className="d-flex justify-content-between align-items-center no-padding"
              >
                <input
                  type="text"
                  onChange={e => props.handleChange(e)}
                  value={props.value}
                  placeholder="np. Pokój 2-osobowy"
                />
                <button
                  className="btn btn-primary ml-4"
                  onClick={() => props.handleAdd()}
                >
                  Dodaj
                </button>
              </Col>
            </div>
            <div>
              <Col className="mt-4 mb-3 no-padding">
                <h4>Dodane pomieszczenia: {props.rooms.length}</h4>
                {rooms}
              </Col>
            </div>
            <Row>
              <Col className="no-padding">
                <button className="btn" onClick={() => props.handlePrevStep()}>
                  Wstecz
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => props.handleNextStep()}
                >
                  Dalej
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <img src="/img/rooms.png" alt="Room" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Step2;
