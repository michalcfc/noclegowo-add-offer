import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Increments from "./Increments";

const Step1 = props => {
  const {
    values: { type, guests }
  } = props;
  return (
    <>
      <Container>
        <div className="content__header">
          <h1>Jaki rodzaj obiektu oferujesz?</h1>
          <p>
            Tylko kilka prostych kroków dzieli Cię od pozyskania pierwszyć
            gości.
          </p>
        </div>
        <Row>
          <Col sm={8}>
            <div className="row">
              <div className="col-md-12">
                <div className="step">
                  <div className="step__body">
                    <div className="form-group">
                      <label>Rodzaj obiektu:</label>

                      <select
                        value={type}
                        onChange={e => props.handleTypeChoose(e)}
                      >
                        <option value="" disabled hidden>
                          Wybierz rodzaj obiektu
                        </option>
                        <option value="Apartament">Apartament</option>
                        <option value="Pensjonat">Pensjonat</option>
                        <option value="Kwatera prywatna">
                          Kwatera prywatna
                        </option>
                        <option value="Ośrodek Wypoczynkowy">
                          Ośrodek Wypoczynkowy
                        </option>
                        <option value="Willa">Willa</option>
                        <option value="Pole namiotowe">Pole namiotowe</option>
                        <option value="Domek Letniskowy">
                          Domek Letniskowy
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Lokalizacja:</label>
                      <input
                        type="text"
                        placeholder="np. Zakopane, Krupówki 23"
                      />
                      <img
                        className="mt-4 mb-2"
                        src="/img/mapa.jpg"
                        alt="Map"
                      />
                    </div>
                    {type === "Apartament" ? (
                      <Increments
                        label="Liczba apartamentów pod tym adresem:"
                        name="guests"
                        count={guests}
                        handleAddGuests={props.handleAddGuests}
                        handleRemoveGuests={props.handleRemoveGuests}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="btn btn-primary"
                // disabled={guests > 0 && type !== "" ? "" : "disabled"}
                onClick={() => props.handleNextStep()}
              >
                Następny krok
              </button>{" "}
              {guests > 0 && type !== ""
                ? "Świetnie Ci idzie! Chodźmy dalej :)"
                : ""}
            </div>
          </Col>
          <div className="col-sm-4 d-flex align-items-center pl-4">
            <img src="/img/location.png" alt="Room" />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Step1;
