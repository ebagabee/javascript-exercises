const palindromes = function (string) {
  const onlyAlphaNumeric = string.toLowerCase().match(/[a-z0-9]/g);

  if (!onlyAlphaNumeric) return false;

  const cleanedString = onlyAlphaNumeric.join("");

  const reversedString = [...cleanedString].reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
