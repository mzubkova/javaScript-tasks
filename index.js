/**
 * @param {String} str
 * @returns {Boolean}
 */
function isBalanced(str) {
  if (str === "empty" || !arguments.length) return true;

  let symbols = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let arrayOfString = str.split("");
  let newArray = [];

  for (let i = 0; i < arrayOfString.length; i++) {
    openBracket = Object.keys(symbols).indexOf(arrayOfString[i]);
    closeBracket = Object.values(symbols).indexOf(arrayOfString[i]);

    if (openBracket !== -1) {
      newArray.push(openBracket);
    }

    if (closeBracket !== -1) {
      openBracket = newArray.pop();
      if (closeBracket !== openBracket) {
        return false;
      }
    }
  }

  return newArray.length === 0;
}

module.exports = { isBalanced };
