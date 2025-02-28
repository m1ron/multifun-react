import React, { useState } from "react";
import CatalogCategory from "./CatalogCategory";
import CatalogTab from "./CatalogTab";

const catalogData = {
  casinos: [
    {
      brand: "King Billy",
      logo: {
        big: "assets/img/catalog/king-billy-b.png",
        small: "assets/img/catalog/king-billy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "PlayOJO",
      logo: {
        big: "assets/img/catalog/play-ojo-b.png",
        small: "assets/img/catalog/play-ojo-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Casimba",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/casimba-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Verde",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/verde-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "ICE Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/ice-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Wolfy Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/wolfy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Stupid Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/stupid-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "iNetBet Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/inetbet-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Kudos Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/kudos-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Primaplay",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/primaplay-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    }
  ],
  sportsback: [
    {
      brand: "Casimba",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/casimba-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Verde",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/verde-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "ICE Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/ice-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Wolfy Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/wolfy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Stupid Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/stupid-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "iNetBet Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/inetbet-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
  ],
  bingo: [
    {
      brand: "Wolfy Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/wolfy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Stupid Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/stupid-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "iNetBet Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/inetbet-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
  ],
  poker: [
    {
      brand: "Verde",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/verde-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "ICE Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/ice-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Wolfy Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/wolfy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Stupid Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/stupid-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "iNetBet Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/inetbet-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
  ],
  fantasy: [
    {
      brand: "Stupid Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/stupid-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "iNetBet Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/inetbet-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Wolfy Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/wolfy-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
    {
      brand: "Kudos Casino",
      logo: {
        big: "assets/img/catalog/casimba-b.png",
        small: "assets/img/catalog/kudos-s.png"
      },
      promotion: "1,500$ Welcome Bonus + 150 Free Spins",
      cashback: "8% to 10%",
      registerLink: "#"
    },
  ],
};

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("casinos");

  return (
    <div className="catalog">
      <CatalogCategory activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      {Object.keys(catalogData).map((category) => (
        <CatalogTab
          key={category}
          id={category}
          title={category}
          items={catalogData[category]}
          isActive={activeCategory === category}
        />
      ))}
    </div>
  );
};

export default Catalog;