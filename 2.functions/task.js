function getArrayParams(...arr) {
  if (arr.length ===0) {
    return { min: 0, max: 0, avr:0 };
  }
  
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
  
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
  
      sum += arr[i];
    }
  
  const avg = +(sum / arr.length).toFixed(2);
  
    return { min: min, max: max, avg: avg };
  }
  
  console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
  console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
  console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }
  
  
  
  // Функция для суммирования элементов массива
  function summElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    return arr.reduce((sum, el) => sum + el, 0);
  }
  
  // Функция для вычисления разницы максимального и минимального элементов
  function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return max - min;
  }
  
  // Функция для вычисления разницы сумм чётных и нечётных элементов
  function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let sumEvenElement = 0;
    let sumOddElement = 0;
  
    for (const el of arr) {
      if (el % 2 === 0) {
        sumEvenElement += el;
      } else {
        sumOddElement += el;
      }
    }
  
    return sumEvenElement - sumOddElement;
  }
  
  // Функция для вычисления среднего значения чётных элементов
  function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let sumEvenElement = 0;
    let countEvenElement = 0;
  
    for (const el of arr) {
      if (el % 2 === 0) {
        sumEvenElement += el;
        countEvenElement++;
      }
    }
  
    return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
  }
  
  // Примеры использования
  console.log(summElementsWorker()); // 0
  console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
  
  console.log(differenceMaxMinWorker()); // 0
  console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10
  
  console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
  console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269
  
  console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
  console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38
  
  
  
  function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
  
    for (const dataArr of arrOfArr) {
     
      const result = func(...dataArr);
      
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
  
    return maxWorkerResult;
  }
  
  const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
  ];
  
  console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
  console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
  console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
  console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
  
  
  