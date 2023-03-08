function telephoneCheck(str) {
  if (
    str.match(/^[1]?\s?\d{3}-\d{3}-\d{4}/) ||
    str.match(/^[1]?\s?\(\d{3}\)\s\d{3}-\d{4}/) ||
    str.match(/^[1]?\s?\(\d{3}\)\d{3}-\d{4}/) ||
    str.match(/^[1]?\s?\d{10}$/) ||
    str.match(/^[1]?\s?\d{3}\s\d{3}\s\d{4}/)
  ) {
    return true;
  }
  return false;
}
console.log(telephoneCheck("15555555555"));
