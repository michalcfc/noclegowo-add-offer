import React from "react";
import { Col } from "react-bootstrap";

const Pack = props => {
  return (
    <>
      {" "}
      <Col>
        <div className="pricing">
          <div className="pricing__header">
            <h3>{props.title}</h3>
            <p />
          </div>
          <div className="pricing__body">
            <ul>
              <li>0% commission</li>
              <li>100 points</li>
              <li>No limit gallery</li>
              <li>High position guarantee</li>
              <li>Promotion on Facebook</li>
            </ul>
          </div>
          <div className="pricing__footer">
            <strong>
              <span>199 PLN</span>
            </strong>
            <button className="btn btn-outline-dark" to="/summary">
              Subscribe
            </button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Pack;
