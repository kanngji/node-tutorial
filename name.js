// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// local
const secret = "SUPER SECRET";

// share
const jhon = "jhon";
const peter = "peter";

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHi("susan");
// sayHi(jhon);
// sayHi(peter);

// console.log(module);

module.exports = { jhon, peter };
