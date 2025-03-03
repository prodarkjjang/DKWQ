gsap.registerPlugin(ScrollTrigger);

//reset scrollbar position after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// let speed = 100;
// let height = document.querySelector("svg").getBBox().height;
// gsap.set("#h2-1", { opacity: 0 });


// /*  SCENE 1 */
// let scene1 = gsap.timeline();
// ScrollTrigger.create({
//     animation: scene1,
//     trigger: ".scrollElement",
//     start: "top top",
//     end: "45% 100%",
//     scrub: 3
// });

// // hills animation
// scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
// scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
// scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
// scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);


// /* Clouds  */
// let clouds = gsap.timeline();
// ScrollTrigger.create({
//     animation: clouds,
//     trigger: ".scrollElement",
//     start: "top top",
//     end: "70% 100%",
//     scrub: 1
// });

// clouds.to("#cloud1", { x: 500 }, 0);
// clouds.to("#cloud2", { x: 1000 }, 0);

// /*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "0 100%",
    end: "1000 100%",
    scrub: 1
});

// // hills animation
scene1.to("#bg", { x: 100}, 0);