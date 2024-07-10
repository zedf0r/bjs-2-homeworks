"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - (4 * a * c);
  let rootFirst = (-b + Math.sqrt(d))/(2*a);
  let rootSecond = (-b - Math.sqrt(d))/(2*a);
  let root = -b/(2*a);
  if (d < 0) {
    console.log("Корней нет")
  } else if (d == 0) {
    arr.push(root);
  } else {
    arr.push(rootFirst, rootSecond);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentDecimal = percent / 100;
  let monthlyRate = percentDecimal / 12;
  let sum = amount - contribution;
  let payment = sum * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  let countAmount = Math.round((payment * countMonths) * 100) / 100;
  if (sum == 0) {
    countAmount = 0;
  }
  return countAmount
}