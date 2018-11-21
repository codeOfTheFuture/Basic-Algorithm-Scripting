function bouncer(arr) {
  const noFalsy = [];

  for(let i = 0; i < arr.length; i++) {
    let toBool = Boolean(arr[i]);
    if(toBool === true) {
      noFalsy.push(arr[i]);
    }
  }
  return noFalsy;
}

console.log(bouncer([7, "ate", "", false, 9]));