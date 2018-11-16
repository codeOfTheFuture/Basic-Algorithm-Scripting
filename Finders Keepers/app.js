function findElement(arr, func) {
  let numFinder = arr.find(func);

  return numFinder;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);