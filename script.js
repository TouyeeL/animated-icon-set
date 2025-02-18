// ✅ gsap loaded? 
console.log( gsap );

let tl = gsap.timeline({repeat:0})
set('#heart',{drawSVG: "0"}) 
to('#heart',{drawSVG: "100%", duration:2, 


})