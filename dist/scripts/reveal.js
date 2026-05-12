(()=>{
  let delayAmount = 0;
  let resetTimeout = null;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        if (e.intersectionRatio > 0) {
          // Stagger effect
          const target = e.target;
          target.style.transitionDelay = `${delayAmount * 100}ms`;
          delayAmount++;
          
          requestAnimationFrame(() => {
            target.classList.add('reveal-in');
          });

          // Reset delay counter slightly after last item processed to restart stagger for next row
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            delayAmount = 0;
          }, 50);

          obs.unobserve(target);
        }
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
