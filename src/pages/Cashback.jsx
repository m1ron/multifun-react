import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
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

        <Catalog />

        <Reviews
          heading="*__Cashback__* Explained"
          generated="This review is A.I generated"
          data={[
            {
              title: 'How Cashback Works',
              content: '**Absolutely.** You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
            },
            {
              title: 'Benefits of Cashback Offers',
              content: '' +
                '1. Risk Mitigation: Cashback provides players with a safety net, reducing the risk associated with playing casino games online.\n' +
                '2. Extended Playtime: By receiving a portion of their losses back, players can extend their playtime and explore more games without risking additional funds.\n' +
                '3. Increased Loyalty: Cashback promotions can foster loyalty among players, as they feel appreciated and supported by the casino even in the face of losses.\n' +
                '4. Incentive for High Rollers: High rollers, who wager substantial amounts, can benefit significantly from cashback offers, as even a small percentage of their losses can amount to substantial returns.'
            },
            {
              title: 'Considerations',
              content: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
            },
            {
              title: 'Conclusion',
              content: 'Absolutely. You can have accounts with different gambling websites, all of which will award you a combined cashback balance that you can withdraw all at once to your favorite payment method.'
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