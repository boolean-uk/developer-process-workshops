const reverseString = (str) => {
  if (str.length <= 1) return str;

  return reverseString(str.substring(1)) + str[0];
};

module.exports = reverseString;

// Ed's implemmentation without using String.substring
// const reverseString = (str) => {
//   if (str.length <= 1) return str;

//   const string = substring(str, 1);

//   return reverseString(string) + str[0];
// };

// const substring = (str, index, newString = "") => {
//   if (index >= str.length) return newString;

//   newString += str[index];

//   return substring(str, index + 1, newString);
// };
