const repeatString = function(string, num) {
    newStr='';
    if (num>=0){
        for (i = 0; i<num; i++) {
            newStr = newStr.concat(string);
        }
        return newStr;
    }
    else {
        return 'ERROR';
    }
    };

// Do not edit below this line
module.exports = repeatString;
