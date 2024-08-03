const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numberArray) {
    let sumAllNumbers = numberArray.reduce((acc,curr) => acc + curr, 0);
    return sumAllNumbers;
};

const multiply = function(numberArray) {
  let multiplyAllNumbers = numberArray.reduce((acc,curr) => acc * curr, 1);
  return multiplyAllNumbers;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if(num < 0){
    return -1;
  }else if(num == 0){
    return 1;
  }
  else{
    return (num * factorial(num-1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
