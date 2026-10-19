const sumAll = function(item1, item2) {
    if (!Number.isInteger(item1) || !Number.isInteger(item2)) {
        return "ERROR";
    }

    if (item1 < 0 || item2 < 0) {
        return "ERROR";
    }

    let greaterThan = 0;
    let lessThan = 0;
    let sum = 0;

    if (item1 > item2) {
        greaterThan = item1;
        lessThan = item2;
    } else {
        greaterThan = item2;
        lessThan = item1;
    }

    for (let i = lessThan; i < greaterThan + 1; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
