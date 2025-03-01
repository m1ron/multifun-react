import React, { useEffect, useRef } from "react";
import Glide from '@glidejs/glide/dist/glide'

const GamesCarousel = ({ heading, games }) => {
  const glideRef = useRef(null);

  useEffect(() => {
    const glideInstance = new Glide(glideRef.current, {
      perView: 5,
      gap: 20,
      breakpoints: {
        991: { perView: 4, gap: 16 },
        767: { perView: 3 },
        520: { perView: 2 },
      },
    });
    glideInstance.mount();
    return () => glideInstance.destroy();
  }, []);
  return (
    <section className="games">
      <h3 className="h3 games__heading">{heading}</h3>
      <div className="glide games__carousel" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides games__list">
            {games.map((game, index) => (
              <div key={index} className="glide__slide">
                <div className="game">
                  <figure className="game__preview">
                    <img src={game.imageSrc} width="240" height="260" alt={game.altText} />
                    <a href={game.playLink} className="btn btn-primary">Play</a>
                  </figure>
                  <p className="game__play">Play {game.name} on:</p>
                  <div className="game__platforms">
                    {game.platforms.map((platform, idx) => (
                      <a key={idx} href={platform.link}>
                        <img src={platform.logo} width="16" height="16" alt={platform.name} />
                        {platform.name}
                      </a>
                    ))}
                    {game.extraPlatforms && <a href="#">+{game.extraPlatforms}</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesCarousel;