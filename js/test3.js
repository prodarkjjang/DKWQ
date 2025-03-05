gsap.registerPlugin(ScrollTrigger);

// Animate book scale on scroll
gsap.to('.book', {
  scrollTrigger: {
    scrub: 1,
    start: 0,
    end: () => window.innerHeight * 0.25,
  },
  scale: 1.45,
});


// Animate book pages on scroll
const PAGES = [...document.querySelectorAll('.book__page')];
PAGES.forEach((page, index) => {
  gsap.set(page, { z: index === 0 ? 13 : -index });
  if (index === 11) return;

  gsap.to(page, {
    rotateY: `-=${180 - index / 2}`,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),
      end: () => (index + 2) * (window.innerHeight * 0.25),
    },
  });

  gsap.to(page, {
    z: index === 0 ? -13 : index,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),
      end: () => (index + 1.5) * (window.innerHeight * 0.25),
    },
  });
});
