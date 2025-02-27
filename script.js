// ✅ gsap loaded? 
console.log( gsap );

const heart = gsap.timeline();


// Animate the gradient stroke of the SVG
gsap.to("#heart", {
    duration: 5,
    strokeDashoffset: 0,
    ease: "power1.inOut",
    strokeDasharray: 1000,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
});

const star = gsap.timeline();


// Animate the gradient stroke of the SVG
gsap.to("#star", {
    duration: 3,
    strokeDashoffset: 0,
    ease: "power1.inOut",
    strokeDasharray: 1000,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    attr: {
        stroke: "url(#gradient)"
    },
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


