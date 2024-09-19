// Storing a function into a variable without arrow function
const printSum = function (a,b) {
    (typeof(a) === "number" && typeof(b) === "number") ?  console.log(a+b) : console.log("Insert two Numbers");
};

printSum(1,2);
printSum("a","b");

const printSumArrow = (a,b) => {
    return(typeof(a) === "number" && typeof(b) === "number") ?  (a+b) : ("Insert two Numbers");
};

console.log(printSumArrow(1,2));
console.log(printSumArrow("a","b"))