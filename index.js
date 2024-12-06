// task 1
// const showName = (name) => {
//   alert(name);
// };
// showName("John");

// task 2
const randomNumber = () => {
  return Math.floor(Math.random() * 5) + 1;
};
console.log(randomNumber());

// task 3
const nameLength = (name, surname) => {
  const bothLength = name.length + surname.length;
  return bothLength;
};
console.log(nameLength("Ruta", "Davidaviciute"));

// task 4
const legalAge = (age) => {
  if (age >= 18) {
    alert("You can drink energy drinks!");
  } else {
    alert("You are too young to drink energy drink!");
  }
};
// console.log(legalAge(20));

// task 5
const indexOfAlphabet = (char) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.indexOf(char);
};
console.log(indexOfAlphabet("b"));

// task 6
const calculator = (n1, n2, operator) => {
  if (operator === "+") {
    return n1 + n2;
  } else if (operator === "-") {
    return n1 - n2;
  } else if (operator === "*") {
    return n1 * n2;
  } else if (operator === "/") {
    return n1 / n2;
  }
};
console.log(calculator(2, 2, "/"));

// task 7
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(generateRandomNumber());
const squareNumber = () => {
  const randomNumber = generateRandomNumber();
  console.log(randomNumber);
  return randomNumber * randomNumber;
};
console.log(squareNumber(generateRandomNumber()));
