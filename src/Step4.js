import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./stepHeader";
import Increments from "./Increments";

const Step4 = props => {
  const {
    values: { Persons, Bedrooms, singleBed, doubleBed, flats, type }
  } = props;
  return (
    <>
      <Container>
        <Header
          title="Informacje o zakwaterowaniu"
          subtitle="Uzupełnij informacje o pomieszczeniu."
        />
        <Row>
          <Col sm={8}>
            <div className="step">
              <div className="step__body">
                {type === "Apartament" ? (
                  ""
                ) : (
                  <select>
                    <option value="">Wybierz rodzaj pomieszczenia</option>
                    <option value="pokój">Pokój</option>
                    <option value="Apartament">Apartament</option>
                    <option value="Cały dom">Cały dom</option>
                    <option value="Namiot">Namiot</option>
                    <option value="Domek letniskowy">Domek letniskowy</option>
                    <option value="Przyczepa">Przyczepa</option>
                  </select>
                )}

                <Increments
                  label="Max. liczba osób:"
                  name="Persons"
                  count={Persons}
                  handleAddGuests={props.handleAddGuests}
                  handleRemoveGuests={props.handleRemoveGuests}
                />
                <Increments
                  label="Liczba sypialni:"
                  name="Bedrooms"
                  count={Bedrooms}
                  handleAddGuests={props.handleAddGuests}
                  handleRemoveGuests={props.handleRemoveGuests}
                />
                <Increments
                  label="Liczba pojedynczy łóżek:"
                  name="singleBed"
                  count={singleBed}
                  handleAddGuests={props.handleAddGuests}
                  handleRemoveGuests={props.handleRemoveGuests}
                />
                <Increments
                  label="Liczba podwójnych łóżek:"
                  name="doubleBed"
                  count={doubleBed}
                  handleAddGuests={props.handleAddGuests}
                  handleRemoveGuests={props.handleRemoveGuests}
                />

                {/* {roomDetails.map((d, id) => {
                  return (
                    <div key={id} className="step__items">
                      {d.name}
                      <Increments
                        id={d.id}
                        name="doubleBed"
                        count={d.count}
                        handleAddGuests={props.handleAddGuests}
                        handleRemoveGuests={props.handleRemoveGuests}
                      />
                    </div>
                  );
                })} */}
                <div className="step__items">
                  Łazienka
                  <div className="mr-3">
                    <input id="radio-1" type="radio" name="radio" />
                    <label htmlFor="radio-1">Tak</label>
                    <input id="radio-2" type="radio" name="radio" />
                    <label htmlFor="radio-2" className="ml-4">
                      Nie
                    </label>
                  </div>
                </div>
                <div className="step__items">
                  Cena:{" "}
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            {/* {props.isAnother ? '' : '' } */}
            <>
              <div className="mt-4 mb-4">
                <p>Galeria zdjęć: </p>
                <button
                  className="btn btn-outline-dark mr-3"
                  onClick={() => props.handlePhotoModal()}
                >
                  + Wybierz zdjęcia ze swojej galerii
                </button>
              </div>
              <div className="mt-4 mb-4">
                <div className="row">
                  {props.images
                    .filter(img => img.choosen)
                    .map(i => {
                      return (
                        <div className="col-md-3">
                          <img
                            className={i.choosen ? "" : "grayImage"}
                            src={i.src}
                            alt="Room"
                          />
                        </div>
                      );
                    })}
                </div>
                <div className="row mt-3">
                  <h6>Udogodnienia obiektu:</h6>
                  <div className="col-md-12">
                    <button
                      className="btn btn-outline-dark mr-3"
                      onClick={() => props.handlePhotoModal()}
                    >
                      + Wybierz udogodnienia
                    </button>
                  </div>
                </div>
                <div className="step">
                  <Increments
                    label="Ilość takich pomieszczeń: tooltip"
                    name="flats"
                    count={flats}
                    handleAddGuests={props.handleAddGuests}
                    handleRemoveGuests={props.handleRemoveGuests}
                  />
                </div>
              </div>
            </>
          </Col>
          <Col sm={4}>
            <img src="/img/rooms.png" alt="Room" />
          </Col>{" "}
        </Row>
        <Row className="mt-4">
          <Col className="no-padding">
            <button className="btn" onClick={() => props.handlePrevStep()}>
              Wstecz
            </button>
            {/* <button
              className="btn btn-primary mr-3"
              onClick={() => props.handleOpenModal()}
            >
              + Dodaj kolejny
            </button> */}
            <button
              className="btn btn-primary"
              onClick={() => props.handleNextStep()}
            >
              Dalej
            </button>
          </Col>
        </Row>
        {props.photo ? (
          <div className="openModal">
            <span className="btn" onClick={() => props.handlePhotoModal()}>
              X
            </span>
            <div className="openModal__body">
              <div className="mt-4 mb-4">
                <h6>Wybierz zdjęcia dla tego pomieszczenia:</h6>
                <div className="row mt-4">
                  {props.images.map(i => {
                    return (
                      <div className="col-md-3">
                        <img
                          onClick={() => props.imageChoosen(i.id)}
                          className={i.choosen ? "border-green" : "grayImage"}
                          src={i.src}
                          alt="Room"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2">
                  <input
                    type="file"
                    name="uploadfile"
                    id="img"
                    classame="d-none"
                  />
                  <label htmlFor="img">
                    {" "}
                    <span className="btn btn-secondary">
                      Wgraj kolejne zdjęcia
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.openModal ? (
          <div className="openModal">
            <span className="btn" onClick={() => props.handleOpenModal()}>
              X
            </span>
            <div className="openModal__body">
              <p>Czy chesz dodać pomieszczenia w tej samej lokalizacji?</p>
              <div>
                <button
                  value="Tak"
                  onClick={e => props.handleAddAnotherOffer(e)}
                  className="btn btn-outline-dark mr-2"
                >
                  Tak
                </button>
                <button
                  value="Nie"
                  onClick={e => props.handleAddAnotherOffer(e)}
                  className="btn btn-outline-dark"
                >
                  Nie
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Step4;
