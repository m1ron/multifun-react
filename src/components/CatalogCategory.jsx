import React from "react";

const categories = [
  { id: "casinos", icon: "assets/img/categories/casinos.svg", label: "Casinos" },
  { id: "sportsback", icon: "assets/img/categories/sports.svg", label: "Sportsback" },
  { id: "bingo", icon: "assets/img/categories/bingo.svg", label: "Bingo" },
  { id: "poker", icon: "assets/img/categories/poker.svg", label: "Poker" },
  { id: "fantasy", icon: "assets/img/categories/fantasy.svg", label: "Fantasy" },
];

const CatalogCategory = ({ activeCategory, onSelectCategory }) => {
  const handleCategoryClick = (event, categoryId) => {
    event.preventDefault();
    onSelectCategory(categoryId);
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((category) => (
          <li key={category.id} className={activeCategory === category.id ? "active" : ""}>
            <a href={`#${category.id}`} onClick={(e) => handleCategoryClick(e, category.id)}>
              <img src={category.icon} alt={category.label} /> {category.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogCategory;