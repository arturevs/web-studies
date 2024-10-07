let varA = 10;
let varB = 20;
console.log(varA, varB); // control
[varA,varB] = [varB, varA]; // first method
console.log(varA, varB); // control

varA = varA + varB; // second method
varB = varA - varB;
varA = varA - varB;
console.log(varA, varB) // control