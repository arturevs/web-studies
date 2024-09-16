const school = "Univers1ty"
const c = 'y'
const n = 9
const z = 2
console.log(school.charAt(n)) // returns character at n position
console.log(school.charCodeAt(n)) // returns character at n position's ASCII code
console.log(school.length) // returns string length
console.log(school.indexOf(c)) // returns character c first appearence's index
console.log(school.substring(z)) // returns the substring that starts from index z including z.
console.log(school.substring(z, n)) // same as substring but the substring ends at n index not including n
console.log("School ".concat(school).concat("!")) // returns the string born from the concatenation
console.log(school.replace(/\d/, 'i')) // replaces by flag or value one value from the string with other
console.log('Maria,João,Ana'.split(','))


