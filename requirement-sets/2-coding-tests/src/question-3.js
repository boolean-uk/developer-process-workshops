const reverseString = (str) => {
  if (str.length <= 1) return str;

  return reverseString(str.substring(1)) + str[0];
};

module.exports = reverseString;
