let cWidth = document.getElementsByClassName("content")[0].offsetWidth;
let cHeight = document.getElementsByClassName("content")[0].offsetHeight;

console.log(cWidth);
const tl = gsap.timeline();


// to add fly path and plane here

// Background
tl.to(".background", {
    x: -cWidth,
    duration: 4,
    ease: "power1.out"
}, 0);

// Ground
tl.to(".ground", {
    x: -cWidth,
    duration: 3,
    ease: "power1.out"
}, "-=3");

// GroundPlane
tl.to(".groundPlane", {
    x: cWidth/2,
    duration: 1,
    ease: "power1.out"
}, "+=0.5");

// person landed
tl.from(".person", {
    y: -cHeight*5/100,
    opacity: 0,
    duration: 0.5,
    ease: "power1.out"
}, "+=0.5");

// human jump
tl.to(".person", {
    y: -cHeight*2/100,
    duration: 0.1, 
    ease: "power3.out", 
    yoyo: true, 
    repeat: 1 
}, "+=0.3");

// GroundPlane phase out
tl.to(".groundPlane", {
    x: -cWidth/2,
    duration: 3,
    ease: "none"
}, "+=0.5");

// tree comes in
tl.to(".tree", {
    x: -cWidth * 1.2,
    duration: 7.2,
    // repeat: 2,
    ease: "none"
}, "-=0.5");

// busstop comes in
tl.to(".busstop", {
    x: -cWidth / 2,
    duration: 3,
    ease: "none"
}, "-=5");

// bus comes in
tl.to(".bus", {
    x: -cWidth / 2,
    duration: 2,
    ease: "power1.out"
}, "-=0.5");

// bus goes out
tl.to(".bus", {
    x: -cWidth * 1.5,
    duration: 2,
    ease: "power1.in"
}, "+=0.1");

// dog comes in
tl.to(".dog", {
    x: -cWidth / 3,
    duration: 2,
    ease: "none"
}, "+=0.5");



/* background plane male female bus busstop tree dog cloud

what i need:
1. Moving left at different speed: 
x: -1 * speed 
2. Changing color from 1 to 2:
change color or apply a opacity layer
3. Jumping animation
yoyo
4. stop moving for x seconds
*/

/* sun building background building with numbers 3 mall inside jellycat restaurant inside cloud chat
what i need:
1. moving in a circle 
2. Changing opacity
3. floating up and down
4. size become bigger with bounce
*/


/* map X plane top view place names bigger ppl
what i need:
1. zoom in svg
2. animate X
3. make obj follow path
4. make text appear
5. resize everything together and coordinates shouldnt flatter
*/