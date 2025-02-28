const Home = () => {
  return (
    <main className="main dotted" id="top">
      <article className="wrapper">

        <header className="index">
          <div className="index__content">
            <h2 className="h1 index__heading">Get up <strong>10% <span className="zigzag">cashback</span></strong> <br />from the best gambling websites</h2>
            <p>Multifun is an invite-only community offering members exclusive cashbacks from <strong>over 300 gambling websites</strong>. With Multifun, members always earn money back on losses.</p>
            <div className="buttons index__buttons">
              <a href="/login" className="btn btn-primary">Login Up</a>
              <a href="#" className="btn">Watch Demo</a>
            </div>
          </div>
        </header>

        <section className="logos">
          <h3 className="logos__heading"><span>Choose from over <strong>300</strong> websites including</span></h3>
          <div className="logos__marquee">
            <ul className="logos__group">
              <li><img src="assets/img/logos/playojo.png" width="82" height="72" alt="PLAYOJO" /></li>
              <li><img src="assets/img/logos/casimba.png" width="97" height="72" alt="Casimba" /></li>
              <li><img src="assets/img/logos/rizk.png" width="112" height="72" alt="RIZK" /></li>
              <li><img src="assets/img/logos/platincasino.png" width="114" height="72" alt="Platin Casino" /></li>
              <li><img src="assets/img/logos/bets10.png" width="121" height="72" alt="Bets10" /></li>
              <li><img src="assets/img/logos/ibet.png" width="90" height="72" alt="Ibet" /></li>
              <li><img src="assets/img/logos/laimz.png" width="93" height="72" alt="Laimz" /></li>
            </ul>
            <ul aria-hidden="true" className="logos__group">
              <li><img src="assets/img/logos/playojo.png" width="82" height="72" alt="PLAYOJO" /></li>
              <li><img src="assets/img/logos/casimba.png" width="97" height="72" alt="Casimba" /></li>
              <li><img src="assets/img/logos/rizk.png" width="112" height="72" alt="RIZK" /></li>
              <li><img src="assets/img/logos/platincasino.png" width="114" height="72" alt="Platin Casino" /></li>
              <li><img src="assets/img/logos/bets10.png" width="121" height="72" alt="Bets10" /></li>
              <li><img src="assets/img/logos/ibet.png" width="90" height="72" alt="Ibet" /></li>
              <li><img src="assets/img/logos/laimz.png" width="93" height="72" alt="Laimz" /></li>
            </ul>
          </div>
        </section>

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

        <section className="how">
          <div id="how" className="how__anchor"></div>
          <h3 className="h2 how__heading">How it works?</h3>
          <p>Very few gambling websites offer cashback to players. With Multifun, you can finally earn cashback from gambling brands that don't usually provide it. Earning cashback with Multifun is&nbsp;simple.</p>
          <ol className="how__list">
            <li>
              <p>Choose a website from <strong>Multifun's</strong> <br />gambling directory.</p>
              <figure className="how__icon"><img src="assets/img/how/list.svg" alt="" /></figure>
            </li>
            <li>
              <p>Create your account through <br />a simple <strong>registration</strong> process.</p>
              <figure className="how__icon"><img src="assets/img/how/stars.svg" alt="" /></figure>
            </li>
            <li>
              <p>Start seeing your <strong>cashback</strong> <br />roll in your <strong>Multifun</strong> account daily.</p>
              <figure className="how__icon"><img src="assets/img/how/price.svg" alt="" /></figure>
            </li>
          </ol>
        </section>

        <section className="one">
          <div id="one" className="one__anchor"></div>
          <header className="one__header">
            <h3 className="h2 one__heading"><em>One</em> account</h3>
            <p>Very few gambling websites offer cashback to players. With Multifun, you can finally earn cashback from gambling brands that don't usually provide it. Earning cashback with Multifun is&nbsp;simple.</p>
          </header>
          <div className="one__screenshots">
            <figure className="d"><img src="assets/img/screenshots/desktop.png" width="838" height="472" alt="Desktop" /></figure>
            <figure className="m"><img src="assets/img/screenshots/mobile.png" width="180" height="399" alt="Mobile" /></figure>
          </div>
        </section>

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

        <section className="cta">
          <h3>Ready to earn cashback?</h3>
          <a className="btn btn-primary" href="/signup">Sign up</a>
        </section>

      </article>
    </main>
  );
};

export default Home;