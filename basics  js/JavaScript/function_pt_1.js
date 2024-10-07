// Objects are functions in JavaScript
console.log(typeof(Object));
class Product {}; console.log(typeof(Product));

// function without return
console.log("\n==================//Functions without return value//====================\n");

function printSum(a,b) {
    (typeof(a) === "number" && typeof(b) === "number") ? console.log(a+b) : console.log("Insert two numbers");
};
printSum("morning", "sunshine");
printSum(2,3);
// following we see aberrations that should not work and probably return an error but JavaScript
printSum(2); 
printSum(1,2,3,4,"hi",true);
printSum();

// function with return value
console.log("\n==================//Functions with return value//====================\n");

function sum(a, b = 0){
    return (typeof(a) === "number" && typeof(b) === "number") ? a+b : "Insert two numbers";
}
console.log(sum("hi","honey"));
console.log(sum(1,2));
console.log(sum(3));
console.log(sum());
console.log(sum(2,3,4,5));