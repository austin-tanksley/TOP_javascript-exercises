const convertToCelsius = function(tempF) {
  let tempC = (tempF-32) * (5/9);
  let rounded = Math.round(10*tempC)/10;
  return rounded;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * (9/5)) + 32
  let rounded = Math.round(10*tempF)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
