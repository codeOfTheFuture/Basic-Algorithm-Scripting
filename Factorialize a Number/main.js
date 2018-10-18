function factorialize(num) {
  if(num === 0) {
    return 1;
  } else {
     const intArray = [];
     for(let i = 1; i <= num; i++) {
       intArray.push(i);
     }
     const multiplyInts = (total, value) => total * value;
     const factorial = intArray.reduce(multiplyInts);
 
     return factorial;
   }
 }
 factorialize(5);