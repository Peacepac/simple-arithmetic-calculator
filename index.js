// The parseFloat() function is used to accept the string and convert it into a floating-point number
  

let num1, num2;
num1 = parseFloat(parseInt(prompt("Enter your first number")));

action = prompt("what operation/operand would you like to perform +, -, *, /");

num2 = parseFloat(parseInt(prompt("Enter your second number")));

if (action == "+") {
  let a = num1 + num2;
  alert(a, " ", "is the sum of the numbers you chose");
} else if (action == "-") {

  let s = num1 - num2;

  alert(s, " ", "is the differnce of the numbers you chose");
} else if (action == "*") {

  let m = num1 * num2;
  alert(m, " ", "is the product of the numbers you chose");
} else if (action == "/") {

  let d = num1 / num2;
  alert(d, " ", "is the quotient of the numbers you chose");
}
