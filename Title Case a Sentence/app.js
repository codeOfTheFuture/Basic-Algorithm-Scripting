function titleCase(str) {
  const lowerCaseArr = str.toLowerCase().split(' ');

  const titleCaseArr = lowerCaseArr.map(val => 
    val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  );
  return titleCaseArr.join(' ');
}

titleCase("I'm a little tea pot");