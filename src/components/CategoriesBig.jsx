import React from 'react';

const CategoriesBig = ({ data }) => {
  return (
    <div className="categories-big">
      <ul className="categories-big__list">
        {data.map((category, index) => (
          <li key={index}>
            <a href={category.href}>
              <figure className="categories-big__icon">
                <img src={category.src} alt={category.alt} />
              </figure>
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesBig;