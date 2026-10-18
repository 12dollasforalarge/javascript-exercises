const removeFromArray = function(originalArray, ...toRemove) {
    let len = originalArray.length;
    let newArray = [];

    for (let i = 0; i < len; i++ ) {
        if (!toRemove.includes(originalArray[i])) {
            newArray.push(originalArray[i]);
        }
    } 

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
