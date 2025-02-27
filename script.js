// ✅ gsap loaded? 
console.log( gsap );

const heart = gsap.timeline();


// Animate the gradient stroke of the SVG
gsap.to("#heart", {
    duration: 0.5,
    scale: 1.2,
    transformOrigin: "center center",
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
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


const moon = gsap.timeline();

gsap.to("#moon", {
    
    attr: {
        stroke: "url(#gradient2)"
    },
    
});

const shine = gsap.timeline();
shine.to("#shine", {
    duration: 2,
    scale: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});