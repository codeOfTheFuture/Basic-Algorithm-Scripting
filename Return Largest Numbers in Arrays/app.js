function largestOfFour(arr) {
  // Instantiate empty array
  const largestArr = [];
  
  // First for loop to iterate over main array
  for(let i = 0; i < arr.length; i++) {
    // Declare var inside of first loop set equal to zeroth index of sub arrays
    let largestNum = arr[i][0];
    // Nested for loop to iterate over values in sub arrays beginning with the first index
    for(let j = 1; j < arr[i].length; j++) {
      // If value of current iteration in sub array is greater than value in largest number var than set largest number var equal to that current iteration value
      if(arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    // Once largest numbers have been found in each sub array than set corresponding index in the new array to largest number
    largestArr[i] = largestNum;
  }
  // Return new array
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);