function getIndexToIns(arr, num) {
  const result = [...arr];
  
  result.push(num);
  result.sort((a,b) => a-b);
  
  return result.indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 3));