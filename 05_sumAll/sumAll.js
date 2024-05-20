const sumAll = function(in1, in2) {
    sum = 0;
    let floor = 0;
    let ceiling = 0;

    //returns error if inputs are negative
    if (in1<0 || in2<0){
        return 'ERROR'
    }
    else if (isNaN(in1)){
        return 'ERROR';
    }
    else if (isNaN(in2)){
        return 'ERROR';
    }
    if (in1>in2){
        floor = in2;
        ceiling = in1;
    }
    else {
        floor = in1;
        ceiling = in2;
    }
    for (i = floor; i < (ceiling +1); i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
