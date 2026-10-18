const reverseString = function(str) {
    let letterArray = str.split("");
    letterArray.reverse();
    return letterArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
