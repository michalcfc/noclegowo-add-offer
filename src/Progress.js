import React from "react";

const Progress = props => {
  const filler = {
    width: `${props.progress}%`
  };
  return (
    <>
      <div className="d-flex justify-content-around text-center mt-3">
        <div className="progress__step">1. Lokalizacja</div>
        <div className="progress__step">2. Zdjęcia</div>
        <div className="progress__step">3. Udogodnienia</div>
        <div className="progress__step">4. Szczegóły</div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={filler}
        >
          {/* {props.progress + "%"} */}
        </div>
      </div>
    </>
  );
};

export default Progress;
