const reverseString = function(textToReverse) {

    let textSepareted = textToReverse.split("");
    let reversedText = textSepareted.reverse().join("");
    
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
