// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const secret = "SUPER SECRET";
const jhon = "jhon";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("susan");
sayHi(jhon);
sayHi(peter);
