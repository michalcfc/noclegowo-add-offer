import React from "react";

const Step5 = props => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="step">
            <div className="step__body">
              <h1 className="h-100 w-100">Dziękujemy</h1>
              <p>
                Twoja oferta została pomyślnie dodana. <br />
                Przejdź do panelu, aby ją opłacić.
              </p>
              <button className="btn" onClick={() => props.handlePrevStep()}>
                Wstecz
              </button>
              <button
                className="btn btn-primary"
                onClick={() => props.handleFinish()}
              >
                Przejdź do panelu
              </button>
              <div>
                <img src="/img/ghouse.jpg" alt="Room" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step5;
