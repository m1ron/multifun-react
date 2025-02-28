import React from "react";
import CatalogRow from "./CatalogRow";

const CatalogTab = ({ id, title, items, isActive }) => {
  return (
    <div id={id} className={`catalog__tab ${isActive ? "active" : ""}`}>
      <div className="catalog__row catalog__row-title">
        <div className="catalog__col"><div className="catalog__title">Casinos</div></div>
        <div className="catalog__col"><div className="catalog__title">Brand name</div></div>
        <div className="catalog__col"><div className="catalog__title">Promotion</div></div>
        <div className="catalog__col"><div className="catalog__title">Cashback</div></div>
        <div className="catalog__col"><div className="catalog__title">Account</div></div>
      </div>

      {items.map((item) => (
        <CatalogRow key={item.brand} {...item} />
      ))}

      <a href="#" className="btn btn-outline catalog__more">Load more</a>
    </div>
  );
};

export default CatalogTab;