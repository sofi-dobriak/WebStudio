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

function scrollAnimation(targetSelector, triggerSelector) {
  gsap.fromTo(
    targetSelector,
    {
      y: 250,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'top 50%',
      },
    }
  );
}

scrollAnimation('.advantages-item', '.advantages-section');
scrollAnimation('.team-item', '.team-section');
scrollAnimation('.portfolio-item', '.portfolio-section');
