import Index from '../components/Index';
import Logos from '../components/Logos';
import How from '../components/How';
import One from '../components/One';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main id="#top" className="main dotted">
      <article className="wrapper">

        <Index />

        <Logos
          title="Choose from over **300** websites including"
          logos={[
            { src: "assets/img/logos/playojo.png", width: 82, height: 72, alt: "PLAYOJO" },
            { src: "assets/img/logos/casimba.png", width: 97, height: 72, alt: "Casimba" },
            { src: "assets/img/logos/rizk.png", width: 112, height: 72, alt: "RIZK" },
            { src: "assets/img/logos/platincasino.png", width: 114, height: 72, alt: "Platin Casino" },
            { src: "assets/img/logos/bets10.png", width: 121, height: 72, alt: "Bets10" },
            { src: "assets/img/logos/ibet.png", width: 90, height: 72, alt: "Ibet" },
            { src: "assets/img/logos/laimz.png", width: 93, height: 72, alt: "Laimz" },
          ]}
        />

        <div className="categories-big">
          <ul className="categories-big__list">
            <li>
              <a href="/cashback">
                <figure className="categories-big__icon"><img src="assets/img/big/casino.svg" alt="Casino" /></figure>
                Casino
              </a>
            </li>
            <li>
              <a href="/cashback">
                <figure className="categories-big__icon"><img src="assets/img/big/sport.svg" alt="Sports" /></figure>
                Sports
              </a>
            </li>
            <li>
              <a href="/cashback">
                <figure className="categories-big__icon"><img src="assets/img/big/fantasy.svg" alt="Fantasy" /></figure>
                Fantasy
              </a>
            </li>
            <li>
              <a href="/cashback">
                <figure className="categories-big__icon"><img src="assets/img/big/bingo.svg" alt="Bingo" /></figure>
                Bingo
              </a>
            </li>
            <li>
              <a href="/cashback">
                <figure className="categories-big__icon"><img src="assets/img/big/poker.svg" alt="Poker" /></figure>
                Poker
              </a>
            </li>
          </ul>
        </div>

        <How
          heading="How it works?"
          description="Very few gambling websites offer cashback to players. With Multifun, you can finally earn cashback from gambling brands that don't usually provide it. Earning cashback with Multifun is simple."
          steps={[
            {
              text: "Choose a website from Multifun's gambling directory.",
              src: "assets/img/how/list.svg",
              alt: "Website List"
            },
            {
              text: "Create your account through a simple registration process.",
              src: "assets/img/how/stars.svg",
              alt: "Registration"
            },
            {
              text: "Start seeing your cashback roll in your Multifun account daily.",
              src: "assets/img/how/price.svg",
              alt: "Cashback"
            }
          ]}
        />

        <One
          heading="*One* account"
          text="With Multifun, you can finally earn cashback from gambling brands that don't usually provide it. Earning cashback with Multifun is simple."
          desktopImage={{ src: "assets/img/screenshots/desktop.png", width: 838, height: 472, alt: "" }}
          mobileImage={{ src: "assets/img/screenshots/mobile.png", width: 180, height: 399, alt: "" }}
        />

        <section className="games">
          <h3 className="h3 games__heading">Top games <br />on the best casinos</h3>
          <div className="glide games__carousel">
            <div className="glide__track" data-glide-el="track">
              <div className="glide__slides games__list">
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/templetumble.jpg" width="240" height="260" alt="Temple Tumble" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/sugarrush.jpg" width="240" height="260" alt="Sugar Rush" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/goldenfishtank.jpg" width="240" height="260" alt="Golden Fish Tank" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/riseofcoins.jpg" width="240" height="260" alt="Rise of Coins" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/templetumble-2.jpg" width="240" height="260" alt="Temple Tumble 2" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/templetumble.jpg" width="240" height="260" alt="Temple Tumble" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/sugarrush.jpg" width="240" height="260" alt="Sugar Rush" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
                <div className="glide__slide">
                  <div className="game">
                    <figure className="game__preview">
                      <img src="assets/img/games/goldenfishtank.jpg" width="240" height="260" alt="Golden Fish Tank" />
                      <a href="#" className="btn btn-primary">Play</a>
                    </figure>
                    <p className="game__play">Play book of ra on:</p>
                    <div className="game__platforms">
                      <a href="#"><img src="assets/img/logos/casimba-sm.png" width="16" height="16" alt="" /> Casumo</a>
                      <a href="#"><img src="assets/img/logos/rizk-sm.png" width="16" height="16" alt="" /> MRGreen</a>
                      <a href="#"><img src="assets/img/logos/platincasino-sm.png" width="16" height="16" alt="" /> PlatinCasion</a>
                      <a href="#">+12</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq">
          <div id="faq" className="faq__anchor"></div>
          <header className="faq__header">
            <h3 className="h2 faq__heading">FAQ</h3>
            <p>Everything you need to know about earning your cashback</p>
          </header>
          <div className="faq__list">
            <section className="faq__entry">
              <h3 className="faq__question">What types of websites are supported?</h3>
              <div className="faq__reply">
                <div className="faq__space">
                  <p>Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.</p>
                </div>
              </div>
            </section>
            <section className="faq__entry">
              <h3 className="faq__question">When can I withdraw my cashback earnings?</h3>
              <div className="faq__reply">
                <div className="faq__space">
                  <p>Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.</p>
                </div>
              </div>
            </section>
            <section className="faq__entry">
              <h3 className="faq__question">How is cashback Calculated?</h3>
              <div className="faq__reply">
                <div className="faq__space">
                  <p>Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.</p>
                </div>
              </div>
            </section>
            <section className="faq__entry">
              <h3 className="faq__question">What payment methods are supported?</h3>
              <div className="faq__reply">
                <div className="faq__space">
                  <p>Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.</p>
                </div>
              </div>
            </section>
            <section className="faq__entry">
              <h3 className="faq__question">Can I earn cashback from an existing gambling account?</h3>
              <div className="faq__reply">
                <div className="faq__space">
                  <p>Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <CTA
          heading="Ready to earn cashback?"
          action="Sign up"
          link="/signup"
        />

      </article>
    </main>
  );
};

export default Home;