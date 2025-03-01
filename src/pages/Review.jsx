import Hero from '../components/Hero';
import Bonus from '../components/Bonus';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Review = () => {
  return (
    <main className="main dotted" id="top">
      <article className="wrapper">

        <Hero
          heading="Dream Vegas **Cashback**"
          paragraph="In Canada, online casino cashback offers have become a popular incentive for players seeking to mitigate their losses while enjoying their favorite games. Cashback programs are designed to provide players with a percentage of their net losses back into their accounts over a specified period, typically weekly or monthly. This promotion has gained traction due to its ability to offer players a sense of security and a chance to recover some of their losses, thereby enhancing the overall gaming experience."
          flag="assets/img/flags/canada.png"
          country="Canada"
        />

        <Bonus
          title="€1,500 Welcome Bonus + 200 Free Spins"
          subtitle="8 to 10% Cashback"
        />

        <Features
          data={[
            {
              title: "Game Variety",
              description: "Bring your data with our built-in integrations for accounting, revenue tools, and banking.",
              tags: ["Evolution Gaming", "Pragmatic Play", "Play N Go", "Yggdrasil", "QuickSpin", "Nolimit City", "Red Tiger Gaming", "ELK Studios", "Stake Logic"]
            },
            {
              title: "Payment Options",
              description: "Bring your data with our built-in integrations for accounting, revenue tools, and banking.",
              tags: ["VISA", "MasterCard", "Bank Transfer", "ApplePay", "Jeton", "Neosurf", "Trustly", "Mifinity", "Flexepin", "AstroPay", "Paysafecard", "Skrill", "Neteller", "Sofort", "EcoPayz", "CashtoCode", "Rapid Transfer"]
            }
          ]}
        />

        <Reviews
          heading="Dream Vegas *__Review__*"
          generated="This review is A.I generated"
          data={[
            { title: "Introduction", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Game Selection", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes.", isOpen: true },
            { title: "User Experience", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Bonuses and Promotions", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Payment Methods", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Customer Support", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Security and Fairness", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
            { title: "Conclusion", content: "One of the key attractions of VulkanVegas.com is its extensive collection of games, catering to diverse preferences of players. From classic table games like blackjack and roulette to a plethora of slot games featuring various themes and gameplay mechanics, VulkanVegas.com ensures there's something for everyone. The platform collaborates with leading software providers such as NetEnt, Microgaming, and Play'n GO, guaranteeing high-quality graphics, smooth gameplay, and fair outcomes." },
          ]}
        />

        <Testimonials
          heading="Public __Ratings__"
          subheading="There are no reviews for this brand. Be the first!"
          reviews={[
            {
              name: "Marc A",
              country: "Italy",
              rating: 5,
              text: "Rewind is a great example of how AI can augment human intelligence is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              name: "John D",
              country: "USA",
              rating: 4,
              text: "Rewind is a great example of how AI can augment human intelligence is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              name: "Emily R",
              country: "Germany",
              rating: 3,
              text: "Rewind is a great example of how AI can augment human intelligence is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
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

export default Review;