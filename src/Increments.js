import React from "react";

const Increments = props => {
  const { id, count, name, label } = props;
  return (
    <>
      {" "}
      <div className="step__items">
        {label}
        <div>
          <button
            className="btn btn-plus"
            name={name}
            disabled={count === 0 ? "disabled" : ""}
            onClick={e => props.handleRemoveGuests(e)}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="btn btn-plus"
            name={name}
            onClick={e => props.handleAddGuests(e, id)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Increments;
