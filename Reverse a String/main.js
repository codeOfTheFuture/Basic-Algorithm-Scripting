function reverseString(str){
  let newString = '';
  for(let i = str.length -1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}
console.log(reverseString('Hello World'));


// function reverseString(str){
//   let newString = str.split('').reverse().join('');
//   console.log(newString);
//   return newString;
// }

// reverseString('Hello World');

// function reverseString(str){
  
//   return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }
// console.log(reverseString('Hello World'));