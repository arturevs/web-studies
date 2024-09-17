const values = [4, 5.4, 0, 3, 9];
console.log(values[0], values[3]);
console.log(values[10]);
console.log(values);
values[10] = 12;
console.log(values[10]);
console.log(values[9]);
console.log(values.length);
values.push({home: 3}, "hi", true);
console.log(values);
console.log(values.pop());
console.log(values);
delete(values[0]);
console.log(values);
console.log(typeof(values))