function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for ( let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
  }
  sum += arr[i]
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  if(!arr.length) {
    max = 0;
    min = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
    
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  
  sum += max - min;
  return sum;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % 2 === 0 ) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (!arr.length) {
    countEvenElement = 1;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]
        countEvenElement += 1;
      }
    }
  }
  
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const sumResult = func(...arrOfArr[i])
    if (sumResult > maxWorkerResult) {
      maxWorkerResult = sumResult;
    }
  }
  return maxWorkerResult
}




