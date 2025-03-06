gsap.registerPlugin(ScrollTrigger);

// Store repeated calculations
const pageCount = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--page-count'));
const scrollStep = window.innerHeight * 0.25;

// Animate book scale on scroll
gsap.to('.book', {
  scrollTrigger: {
    scrub: 1,
    start: 0,
    end: scrollStep,
  },
  scale: 1.45,
});

// Animate book pages on scroll
const PAGES = document.querySelectorAll('.book__page');

PAGES.forEach((page, index) => {
  const startScroll = (index + 1) * scrollStep;
  const midScroll = (index + 1.5) * scrollStep;
  const endScroll = (index + 2) * scrollStep;

  gsap.set(page, { z: index === 0 ? 61 : -index });

  if (index < pageCount - 1) {
    gsap.to(page, {
      rotateY: `-=${180 - index / 2}`,
      scrollTrigger: { scrub: 1, start: startScroll, end: endScroll },
    });

    gsap.to(page, {
      z: index === 0 ? -61 : index,
      scrollTrigger: { scrub: 1, start: startScroll, end: midScroll },
    });
  }
});

// Rotate all photos at a random angle
gsap.utils.toArray('.photo').forEach(photo => {
  gsap.set(photo, { rotate: gsap.utils.random(-10, 10) });
});
