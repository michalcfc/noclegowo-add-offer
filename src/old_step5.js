import React from "react";
import Pack from "./Pack";
import { Row, Col } from "react-bootstrap";

const Step5 = props => {
  const isVisible = props.showTooltip ? "show__is-hidden" : "show__is-visible";
  const tooltip = `${isVisible}`;
  return (
    <>
      <div className="container">
        <div className="content__header">
          <h1>Wybierz pakiet</h1>
          <p>
            Choose a plan that suits you the best. If you are not fully
            satisfied, we offer 30-day money-back guarantee no questions asked!!
          </p>
        </div>
        <div className="row position-relative justify-content-center align-items-center">
          <label>Abonament </label>
          <div
            className={
              props.reservationPack ? "toggle-btn active" : "toggle-btn"
            }
          >
            <input
              onClick={e => props.handlerPack(e)}
              type="checkbox"
              className="cb-value"
              // onMouseOver={() => props.handleMouseEnter()}
            />
            <span className="round-btn" />
          </div>
          <label>Rezerwacje </label>
          <div className={!props.reservationPack ? tooltip : ""} />
        </div>

        <div className="row pack d-none">Rezerwacje</div>
        <Row className="mb-3">
          {!props.reservationPack ? (
            <>
              <Pack title="Standard" />
              <Pack title="Premium" />
              <Pack title="Premium+" />
            </>
          ) : (
            <Col>
              <Pack title="Rezerwacje" />
            </Col>
          )}
        </Row>
        <Row sm={12}>
          <button className="btn" onClick={() => props.handlePrevStep()}>
            Wstecz
          </button>
          <button
            className="btn btn-primary"
            onClick={() => props.handleFinish()}
          >
            Gotowe
          </button>
        </Row>
      </div>
    </>
  );
};

export default Step5;
