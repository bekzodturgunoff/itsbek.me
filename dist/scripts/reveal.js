(()=>{
  let delayAmount = 0;
  let resetTimeout = null;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio > 0) {
        const target = e.target;
        const siblings = target.parentElement?.querySelectorAll(':scope > [data-reveal]');
        if (siblings) {
          const idx = Array.from(siblings).indexOf(target);
          target.style.transitionDelay = `${idx * 80}ms`;
        } else {
          target.style.transitionDelay = `${delayAmount * 80}ms`;
          delayAmount++;
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => { delayAmount = 0; }, 50);
        }

        requestAnimationFrame(() => {
          target.classList.add('reveal-in');
        });

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const init = () => {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.remove('reveal-in');
      el.style.transitionDelay = '0ms';
      obs.observe(el);
    });
  };

  document.addEventListener('astro:page-load', init);
  document.addEventListener('DOMContentLoaded', init);
  init();
})();
