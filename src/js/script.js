const initForms = () => {

  // Selectboxes
  if (typeof NiceSelect !== 'undefined') {
    document.querySelectorAll('.form-select').forEach(el => {
      NiceSelect.bind(el);
    });
  }

  // Password visibility
  const toggles = document.querySelectorAll('.form-password-toggle');
  if (toggles) {
    toggles.forEach(elem => {
      elem.addEventListener('click', event => {
        let parent = elem.parentNode;
        let parentNodes = parent.children;
        let parentNodesArray = Array.from(parentNodes);
        let siblings = parentNodesArray.filter(function (sibling) {
          return sibling.classList.contains('form-control');
        });
        if (siblings.length > 0) {
          const password = siblings[0];
          const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
          if (type === 'text') {
            elem.classList.add('active');
          } else {
            elem.classList.remove('active');
          }
          password.setAttribute('type', type);
        }
        event.preventDefault();
      }, false);
    });
  }
}

const initCategories = () => {
  const categories = document.querySelector('.categories');
  if (categories) {
    const list = categories.querySelectorAll('.categories__list li');
    const catalog = document.querySelector('.catalog');
    const tabs = catalog.querySelectorAll('.catalog__tab');

    list.forEach(el => {
      const entry = el;
      const link = entry.querySelector('a');

      const onClick = e => {
        e.preventDefault();
        if (entry.classList.contains('active')) {
          entry.classList.remove('active');
        } else {
          list.forEach(a => {
            a.classList.remove('active');
          });
          entry.classList.add('active');
          const l = catalog.querySelector('.catalog__tab.active');
          if (l) {
            l.classList.remove('active');
          }
          const i = catalog.querySelector(link.getAttribute('href'));
          if (i) {
            catalog.querySelector(link.getAttribute('href')).classList.add('active');
          }
        }
        return false;
      };

      link.addEventListener('click', onClick);
    });

    tabs.forEach(el => {
      const tab = el;
      const more = tab.querySelector('.catalog__more');

      const onMore = e => {
        e.preventDefault();
        tab.classList.add('full');
        return false;
      };

      if (more) {
        more.addEventListener('click', onMore);
      }
    });
  }
}

const initFAQ = () => {
  const faq = document.querySelector('.faq');
  if (faq) {
    const list = faq.querySelectorAll('.faq__entry');
    list.forEach(e => {
      const entry = e;
      const question = entry.querySelector('.faq__question');
      const reply = entry.querySelector('.faq__reply');
      const space = entry.querySelector('.faq__space');

      const onClick = e => {
        if (entry.classList.contains('open')) {
          e.preventDefault();
          reply.removeAttribute('style');
          entry.classList.remove('open');
          setTimeout(() => {
            entry.classList.remove('visible');
          }, 400);
        } else {
          entry.classList.add('visible');
          setTimeout(() => {
            entry.classList.add('open');
            reply.setAttribute('style', 'max-height:' + reply.getAttribute('data-max') + 'px');
          }, 50);
          return false;
        }
      };
      question.addEventListener('click', onClick);

      const onResize = () => {
        reply.setAttribute('data-max', space.offsetHeight);
      };
      window.addEventListener('resize', onResize);
      onResize();
    });
  }
}

const initReview = () => {
  const review = document.querySelector('.review');
  if (review) {
    const list = review.querySelectorAll('.review__entry');
    list.forEach(e => {
      const entry = e;
      const question = entry.querySelector('.review__question');
      const reply = entry.querySelector('.review__reply');
      const space = entry.querySelector('.review__space');

      const onClick = e => {
        if (entry.classList.contains('open')) {
          e.preventDefault();
          reply.removeAttribute('style');
          entry.classList.remove('open');
          setTimeout(() => {
            entry.classList.remove('visible');
          }, 400);
        } else {
          entry.classList.add('visible');
          setTimeout(() => {
            entry.classList.add('open');
            reply.setAttribute('style', 'max-height:' + reply.getAttribute('data-max') + 'px');
          }, 50);
          return false;
        }
      };
      question.addEventListener('click', onClick)

      const onResize = () => {
        reply.setAttribute('data-max', space.offsetHeight);
      };
      window.addEventListener('resize', onResize);
      onResize();
    });
  }
}

const initGames = () => {
  const games = document.querySelector('.games');
  if (games) {

    var glide = new Glide('.glide', {
      perView: 5,
      gap: 20,
      breakpoints: {
        991: { perView: 4, gap: 16 },
        767: { perView: 3 },
        520: { perView: 2 }
      }
    })

    glide.mount()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initForms();
  initCategories();
  initGames();
  initFAQ();
  initReview();
});