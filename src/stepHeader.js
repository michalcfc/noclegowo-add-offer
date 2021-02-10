import React from "react";

const Header = props => {
  const { title, subtitle } = props;
  return (
    <>
      <div className="content__header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Header;
