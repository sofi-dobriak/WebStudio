gsap.registerPlugin(ScrollTrigger);

const sectionTitles = document.querySelectorAll('.section-anim-title');

sectionTitles.forEach(titleElement => {
  const sectionTitleSplit = new SplitType(titleElement, { types: 'chars' });

  gsap.from(sectionTitleSplit.chars, {
    opacity: 0,
    stagger: 0.04,
    duration: 0.08,
    scrollTrigger: {
      trigger: titleElement,
      start: 'top 50%',
    },
  });
});

function scrollAnimation(item) {
  document.querySelectorAll(item).forEach(block => {
    gsap.fromTo(
      block,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
          toggleActions: 'play none none none',
          fastScrollEnd: true,
          once: true,
        },
      }
    );
  });
}

scrollAnimation('.advantages-item');
scrollAnimation('.team-item');
scrollAnimation('.portfolio-item');
