function chunkArrayInGroups(arr, size) {
  const finalArray = [];

  for(let i = 0; i = arr.length; i++) {
      const subArray = arr.splice(0, size);
      finalArray.push(subArray);
  }
  return finalArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));