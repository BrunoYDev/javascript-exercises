const palindromes = function (theWord) {
    let palindrome = theWord.toLowerCase().replace(/\s+/g, "");

    const testRegex = /[.\/#!$%\^&\*;:{}=\-_~()]/g;

    if(palindrome.match(testRegex)){
        palindrome = palindrome.replace(testRegex, "");
    }

    if(palindrome.includes(",")){
        let moreThanOneWord = palindrome.replace(/,/g, "");

        if(reverseString(moreThanOneWord) === moreThanOneWord){
            return true;
        }
        return false;
    }

    if(reverseString(palindrome) === palindrome) return true
    
    return false;
}; 

const reverseString = (theString) => {
    return theString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
