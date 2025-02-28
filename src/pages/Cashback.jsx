import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

const Cashback = () => {
  return (
    <main className="main dotted" id="top">
      <article className="wrapper">

        <Hero
          heading="Online casino cashback in Canada"
          paragraph="In Canada, online casino cashback offers have become a popular incentive for players seeking to mitigate their losses while enjoying their favorite games. Cashback programs are designed to provide players with a percentage of their net losses back into their accounts over a specified period, typically weekly or monthly. This promotion has gained traction due to its ability to offer players a sense of security and a chance to recover some of their losses, thereby enhancing the overall gaming experience."
          flag="assets/img/flags/canada.png"
          country="Canada"
        />

        <div className="categories">
          <ul className="categories__list">
            <li className="active"><a href="#casinos"><img src="assets/img/categories/casinos.svg" alt="" /> Casinos</a></li>
            <li><a href="#sportsback"><img src="assets/img/categories/sports.svg" alt="" /> Sportsback</a></li>
            <li><a href="#bingo"><img src="assets/img/categories/bingo.svg" alt="" /> Bingo</a></li>
            <li><a href="#poker"><img src="assets/img/categories/poker.svg" alt="" /> Poker</a></li>
            <li><a href="#fantasy"><img src="assets/img/categories/fantasy.svg" alt="" /> Fantasy</a></li>
          </ul>
        </div>

        <div className="catalog">
          <div id="casinos" className="catalog__tab active">
            <div className="catalog__row catalog__row-title">
              <div className="catalog__col">
                <div className="catalog__title">Casinos</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Brand name</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Promotion</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Cashback</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Account</div>
              </div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/king-billy-b.png" width="142" alt="King Billy" /><img className="d" src="assets/img/catalog/king-billy-s.png" width="98" height="66" alt="King Billy" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> King Billy</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/play-ojo-b.png" width="142" alt="PlayOJO" /><img className="d" src="assets/img/catalog/play-ojo-s.png" width="98" height="66" alt="PlayOJO" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> PlayOJO</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Casimba" /><img className="d" src="assets/img/catalog/casimba-s.png" width="98" height="66" alt="Casimba" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Casimba</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Verde" /><img className="d" src="assets/img/catalog/verde-s.png" width="98" height="66" alt="Verde" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Verde</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="ICE Casino" /><img className="d" src="assets/img/catalog/ice-s.png" width="98" height="66" alt="Ice Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> ICE Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Stupid Casino" /><img className="d" src="assets/img/catalog/stupid-s.png" width="98" height="66" alt="Stupid Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Stupid Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="iNetBet Casino" /><img className="d" src="assets/img/catalog/inetbet-s.png" width="98" height="66" alt="iNetBet Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> iNetBet Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Kudos Casino" /><img className="d" src="assets/img/catalog/kudos-s.png" width="98" height="66" alt="Kudos Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Kudos Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Primaplay" /><img className="d" src="assets/img/catalog/primaplay-s.png" width="98" height="66" alt="Primaplay" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Primaplay</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <a href="#" className="btn btn-outline catalog__more">Load more</a>
          </div>
          <div id="sportsback" className="catalog__tab">
            <div className="catalog__row catalog__row-title">
              <div className="catalog__col">
                <div className="catalog__title">Casinos</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Brand name</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Promotion</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Cashback</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__title">Account</div>
              </div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Casimba" /><img className="d" src="assets/img/catalog/casimba-s.png" width="98" height="66" alt="Casimba" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Casimba</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Verde" /><img className="d" src="assets/img/catalog/verde-s.png" width="98" height="66" alt="Verde" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Verde</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="ICE Casino" /><img className="d" src="assets/img/catalog/ice-s.png" width="98" height="66" alt="Ice Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> ICE Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Stupid Casino" /><img className="d" src="assets/img/catalog/stupid-s.png" width="98" height="66" alt="Stupid Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Stupid Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <a href="#" className="btn btn-outline catalog__more">Load more</a>
          </div>
          <div id="bingo" className="catalog__tab">
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Kudos Casino" /><img className="d" src="assets/img/catalog/kudos-s.png" width="98" height="66" alt="Kudos Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Kudos Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Primaplay" /><img className="d" src="assets/img/catalog/primaplay-s.png" width="98" height="66" alt="Primaplay" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Primaplay</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
          </div>
          <div id="poker" className="catalog__tab">
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/play-ojo-b.png" width="142" alt="PlayOJO" /><img className="d" src="assets/img/catalog/play-ojo-s.png" width="98" height="66" alt="PlayOJO" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> PlayOJO</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Casimba" /><img className="d" src="assets/img/catalog/casimba-s.png" width="98" height="66" alt="Casimba" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Casimba</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Verde" /><img className="d" src="assets/img/catalog/verde-s.png" width="98" height="66" alt="Verde" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Verde</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="ICE Casino" /><img className="d" src="assets/img/catalog/ice-s.png" width="98" height="66" alt="Ice Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> ICE Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Stupid Casino" /><img className="d" src="assets/img/catalog/stupid-s.png" width="98" height="66" alt="Stupid Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Stupid Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="iNetBet Casino" /><img className="d" src="assets/img/catalog/inetbet-s.png" width="98" height="66" alt="iNetBet Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> iNetBet Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <a href="#" className="btn btn-outline catalog__more">Load more</a>
          </div>
          <div id="fantasy" className="catalog__tab">
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="ICE Casino" /><img className="d" src="assets/img/catalog/ice-s.png" width="98" height="66" alt="Ice Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> ICE Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
            <div className="catalog__row">
              <div className="catalog__col">
                <figure className="catalog__logo"><img className="m" src="assets/img/catalog/casimba-b.png" width="142" alt="Wolfy Casino" /><img className="d" src="assets/img/catalog/wolfy-s.png" width="98" height="66" alt="Wolfy Casino" /></figure>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Brand name</small> Wolfy Casino</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Promotion</small> 1,500$ WelBonus + 150 Free Spinscome</div>
              </div>
              <div className="catalog__col">
                <div className="catalog__text"><small>Cashback</small> 8% to 10%</div>
              </div>
              <div className="catalog__col"><a href="#" className="btn btn-primary catalog__button">Register</a></div>
            </div>
          </div>
        </div>

        <Reviews
          heading="*__Cashback__* Explained"
          generated="This review is A.I generated"
          data={[
            {
              question: 'How Cashback Works',
              answer: '**Absolutely.** You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
            },
            {
              question: 'Benefits of Cashback Offers',
              answer: '' +
                '1. Risk Mitigation: Cashback provides players with a safety net, reducing the risk associated with playing casino games online.\n' +
                '2. Extended Playtime: By receiving a portion of their losses back, players can extend their playtime and explore more games without risking additional funds.\n' +
                '3. Increased Loyalty: Cashback promotions can foster loyalty among players, as they feel appreciated and supported by the casino even in the face of losses.\n' +
                '4. Incentive for High Rollers: High rollers, who wager substantial amounts, can benefit significantly from cashback offers, as even a small percentage of their losses can amount to substantial returns.'
            },
            {
              question: 'Considerations',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
            },
            {
              question: 'Conclusion',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
            },
          ]}
        />

        <CTA
          heading="Ready to earn cashback?"
          action="Sign up"
          link="/signup"
        />

      </article>
    </main>
  );
};

export default Cashback;