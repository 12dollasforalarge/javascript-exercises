const leapYears = function(year) {
    let dividedByFour = false;
    let hundredCheck = true;
    if (year % 4 == 0) {
        dividedByFour = true;
    }

    if (year % 100 == 0) {
        if (year % 400 == 0){
            hundredCheck = true;
        } else {
            hundredCheck = false;
        }
    }

    if (dividedByFour && hundredCheck) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
