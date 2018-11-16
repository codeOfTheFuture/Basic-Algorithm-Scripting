function repeatStringNumTimes(str, num) {
  if(num > 0) {
    let repeatStrArr = [],
      splitStr = str.split('');
 
  while(num >= 1) {
    let x = [...splitStr],
        y = x.join('');
        repeatStrArr.push(y);

    num--;
    // console.log(repeatStrArr);
  }

  let newRepeatStr = repeatStrArr.join('');
  console.log(newRepeatStr);

  return newRepeatStr;

  } else {
    return '';
  }
}


repeatStringNumTimes("*", 3);