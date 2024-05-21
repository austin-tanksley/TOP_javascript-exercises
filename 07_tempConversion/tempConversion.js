const convertToCelsius = function(tempF) {
  let tempC = (tempF) => {
    (tempF-32) * (5/9);
  }
  let rounded = Math.round(10*tempC)/10;
  return rounded;
};

const convertToFahrenheit = function(tempC) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
