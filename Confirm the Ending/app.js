function confirmEnding(str, target) {
  const targetPos = str.lastIndexOf(target);
  const strEnding = str.substring(targetPos);

  return strEnding === target ? true : false;
}

confirmEnding("Bastian", "n");