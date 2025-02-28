import Index from '../components/Index';
import Logos from '../components/Logos';
import How from '../components/How';
import One from '../components/One';
import Categories from '../components/CategoriesBig';
import Games from '../components/Games';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main id="#top" className="main dotted">
      <article className="wrapper">

        <Index
          heading="Get up **10% _cashback_** from the best gambling websites"
          subheading="Exclusive cashbacks from over 300 gambling websites"
          description="Multifun is an invite-only community offering members exclusive cashbacks from __over 300 gambling websites__. With Multifun, members always earn money back on losses."
          loginLink="/login"
          demoLink="#"
        />

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

        <Categories
          data={[
            { href: '/cashback', src: 'assets/img/big/casino.svg', alt: 'Casino', label: 'Casino' },
            { href: '/cashback', src: 'assets/img/big/sport.svg', alt: 'Sports', label: 'Sports' },
            { href: '/cashback', src: 'assets/img/big/fantasy.svg', alt: 'Fantasy', label: 'Fantasy' },
            { href: '/cashback', src: 'assets/img/big/bingo.svg', alt: 'Bingo', label: 'Bingo' },
            { href: '/cashback', src: 'assets/img/big/poker.svg', alt: 'Poker', label: 'Poker' },
          ]}
        />

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

        <Games
          heading="Top games on the best casinos"
          games={[
            {
              name: "Temple Tumble",
              imageSrc: "assets/img/games/templetumble.jpg",
              altText: "Temple Tumble",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Sugar Rush",
              imageSrc: "assets/img/games/sugarrush.jpg",
              altText: "Sugar Rush",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Golden Fish Tank",
              imageSrc: "assets/img/games/goldenfishtank.jpg",
              altText: "Golden Fish Tank",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Rise of Coins",
              imageSrc: "assets/img/games/riseofcoins.jpg",
              altText: "Rise of Coins",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Temple Tumble 2",
              imageSrc: "assets/img/games/templetumble-2.jpg",
              altText: "Temple Tumble 2",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Temple Tumble",
              imageSrc: "assets/img/games/templetumble.jpg",
              altText: "Temple Tumble",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Sugar Rush",
              imageSrc: "assets/img/games/sugarrush.jpg",
              altText: "Sugar Rush",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            },
            {
              name: "Golden Fish Tank",
              imageSrc: "assets/img/games/goldenfishtank.jpg",
              altText: "Golden Fish Tank",
              playLink: "#",
              platforms: [
                { name: "Casumo", link: "#", logo: "assets/img/logos/casimba-sm.png" },
                { name: "MRGreen", link: "#", logo: "assets/img/logos/rizk-sm.png" },
                { name: "PlatinCasion", link: "#", logo: "assets/img/logos/platincasino-sm.png" },
              ],
              extraPlatforms: 12
            }
          ]}
        />

        <FAQ
          heading="FAQ"
          subheading="Everything you need to know about earning your cashback"
          data={[
            {
              question: 'What types of websites are supported?',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.',
            },
            {
              question: 'When can I withdraw my cashback earnings?',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.',
            },
            {
              question: 'How is cashback Calculated?',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.',
            },
            {
              question: 'What payment methods are supported?',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.',
            },
            {
              question: 'Can I earn cashback from an existing gambling account?',
              answer: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.',
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

export default Home;