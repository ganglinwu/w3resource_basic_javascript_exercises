let a = 5;
let b = 6;
let c = 7;

let theta = Math.acos((a**2 + b**2 - c**2)/(2*a*b));

console.log(`Area of triangle is ${0.5*a*b*Math.sin(theta)}`);