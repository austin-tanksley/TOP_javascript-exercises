const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function() {
  const argument = [...arguments];
  const arr2 = argument.flat();
  //console.log(argument)
  return Number(arr2.reduce((prev,curr)=>prev+curr,0));
};

const multiply = function(a) {
  return a.reduce((prev, curr)=>prev*curr,1);
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  const factors = [];
  for (let i = 1; i <= a; i++) {
    factors.push(i);
  }
  if (a === 0 ){
    return 1;
  }
  else {
    return factors.reduce((prev, curr)=>prev*curr,1);
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
