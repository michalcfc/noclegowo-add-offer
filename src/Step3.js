import React from "react";
// import { Checkbox } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";

const Step3 = props => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <h1>Informacje o udogodnieniach</h1>
            <p>Na jaki rodzaj udogodnień mogą liczyć goście.</p>
            <input
              placeholder="Wyszukaj udogodnień (np. czajnik)"
              onChange={e => props.handleSearch(e)}
              type="search"
              onFocus={() => props.handleHide()}
            />
            {/* {props.search.map((p, id) => {
              return <li key={id}>{p}</li>;
            })} */}

            {props.showSugestion ? (
              <ul
                className="sugestions"
                onMouseLeave={() => props.handleHide()}
              >
                {props.amenities.map((a, id) => {
                  return (
                    <li
                      key={id}
                      onClick={e => {
                        props.handleAddAmenities(
                          a.id,
                          a.name,
                          a.id,
                          a.checked,
                          e
                        );
                      }}
                    >
                      {a.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}

            <ul className="mt-4">
              <h3>Najczęściej wybierane udogodnienia:</h3>
              <li>
                <input type="checkbox" id="checkbox-1" />
                <label htmlFor="checkbox-1">kominek</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-2" />
                <label htmlFor="checkbox-2">prysznic</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-3" />
                <label htmlFor="checkbox-3">pralka</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-4" />
                <label htmlFor="checkbox-4">bilard</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-5" />
                <label htmlFor="checkbox-5">tv</label>
              </li>
              {props.autosugestion.map((s, id) => {
                return (
                  <li
                    key={id}
                    onClick={() => props.handleRemoveAmenities(s.index)}
                  >
                    <input type="checkbox" checked={s.checked} />{" "}
                    <label>{s.title}</label>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col sm={4}>
            <img src="/img/dog.png" alt="Room" />
          </Col>
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

export default Step3;
