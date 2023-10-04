// function popup() {
//   var data = new Date();
//   console.log(data);
// }

// popup();

// function ubaidraza() {
//   var name = prompt("Enter your name");
//   var lastname = prompt("Enter your last name");
//   console.log(name, lastname + " " + "salam");
// }
// ubaidraza();

// function calc(num1, opr, num2) {
//   if (opr === "+") {
//     return num1 + num2;
//   } else if (opr === "-") {
//     return num1 - num2;
//   } else if (opr === "*") {
//     return num1 * num2;
//   } else if (opr === "/") {
//     return num1 / num2;
//   }
// }

// var num1 = +prompt("Enter first value");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter second value");

// var result = calc(num1, operator, num2);
// console.log(result);

// var word = prompt("Enter a word");

// var check = "";

// for (var i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
//   check += word[i];
// }

// if (word === check) {
//   console.log(word + " is a palindrome word");
// } else {
//   console.log(word + " is not a palindrome word");
// }

var randomValues = [, "ubaidraza", "mohtashim", "hmid"];
var password = "";

console.log(randomValues.length);

for (var i = 0; i < 10; i++) {
  var randomNumber = Math.floor(Math.random() * randomValues.length);
  console.log(randomNumber, randomValues[randomNumber]);
  password += randomValues[randomNumber];
}
console.log(password);
