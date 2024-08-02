const repeatString = function(string, number) {
    let textString = "";
    for(i = 1; i<=number; i++){
        textString+=string;
    }
    return textString;
};

// Do not edit below this line
module.exports = repeatString;
