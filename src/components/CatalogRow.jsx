import React from "react";

const CatalogRow = ({ brand, logo, promotion, cashback, registerLink }) => {
  return (
    <div className="catalog__row">
      <div className="catalog__col">
        <figure className="catalog__logo">
          <img className="m" src={logo.big} width="142" alt={brand} />
          <img className="d" src={logo.small} width="98" height="66" alt={brand} />
        </figure>
      </div>
      <div className="catalog__col">
        <div className="catalog__text">
          <small>Brand name</small> {brand}
        </div>
      </div>
      <div className="catalog__col">
        <div className="catalog__text">
          <small>Promotion</small> {promotion}
        </div>
      </div>
      <div className="catalog__col">
        <div className="catalog__text">
          <small>Cashback</small> {cashback}
        </div>
      </div>
      <div className="catalog__col">
        <a href={registerLink} className="btn btn-primary catalog__button">Register</a>
      </div>
    </div>
  );
};

export default CatalogRow;