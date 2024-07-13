"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - (4 * a * c);
  if (d == 0) {
    let root = -b/(2*a);
    arr.push(root);
  } else if (d > 1) {
    let rootFirst = (-b + Math.sqrt(d))/(2*a);
    let rootSecond = (-b - Math.sqrt(d))/(2*a);
    arr.push(rootFirst, rootSecond);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = (percent / 100) / 12;
  let sum = amount - contribution;
  let payment = Number(((sum * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)))) * countMonths).toFixed(2));
  return payment
}