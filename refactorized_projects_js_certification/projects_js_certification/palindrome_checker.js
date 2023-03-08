function palindrome(str) {
  let forward = "";
  let backward = "";
  let modify = str.replace(/\W/g, "").replace(/_/g, "").toLowerCase();
  for (let i = 0; i < modify.length; i++) {
    forward += modify[i];
  }

  for (let j = modify.length - 1; j < modify.length; j--) {
    backward += modify[j];
    if (j == 0) {
      break;
    }
  }
  if (forward == backward) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));
