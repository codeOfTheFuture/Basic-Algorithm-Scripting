function truncateString(str, num) {
  if(str.length > num) {
    let newStr = str.slice(0, num);

    newStr += '...';

    return newStr;

  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);