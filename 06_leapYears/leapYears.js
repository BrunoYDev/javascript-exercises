const leapYears = function(year) {
    let leapYear = year
    let leapYearByFour = leapYear%4;
    let leapYearByFourHundred = leapYear%400;
    let leapYearByHundred = leapYear%100;

    if(leapYearByFour === 0 && leapYear.toString().slice(-2) != "00"){
        return true;
    }else if(leapYear.toString().slice(-2) == "00" && leapYearByFourHundred === 0 && leapYearByHundred === 0){
        return true;
    }
    
    return false;
};

// Do not edit below this line
module.exports = leapYears;
