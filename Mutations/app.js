function mutation(arr) {
  let a = arr[0].toLowerCase(),
      b = arr[1].toLowerCase();
  
  for(let i = 0; i < b.length; i++) {
    if(a.indexOf(b[i]) === -1) {
      return false;
    } 
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

