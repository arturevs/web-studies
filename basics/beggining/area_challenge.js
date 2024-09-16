function circunferenceArea(radius){
    return(Math.PI * (radius**2));
}
function circunferenceLength(radius){
    return(Math.PI * 2 * radius);
}

const radius = 3;

console.log("If there's a circle with radius equal to",String(radius),"its area is:",String(circunferenceArea(radius)));
console.log("If there's a circle with radius equal to",String(radius),"its circumference is:",String(circunferenceLength(radius)));