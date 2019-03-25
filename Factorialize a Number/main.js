// function factorialize(num) {
//   if(num === 0) {
//     return 1;
//   } else {
//      const numArr = [];
//      for(let i = 1; i <= num; i++) {
//        numArr.push(i);
//      }
//      const result = numArr.reduce((prev, curr) => {
//       return prev * curr;
//      });
 
//      return result;
//    }
//  }
//  console.log(factorialize(5));

function factorialize(num) {
  return num === 0 ? 1 :
         num * factorialize(num -1);
}

console.log(factorialize(5));