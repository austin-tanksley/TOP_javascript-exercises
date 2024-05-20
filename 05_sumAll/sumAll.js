const sumAll = function(...args) {
    sum = 0;
    let floor = 0;
    let ceiling = 0;
    let nums = args;
    nums.sort();
    
    //error handling
    for (const num of nums){
        if (num<0){
            return "ERROR";
        }
        else if (typeof num != "number"){
            return "ERROR";
        }
    }

    //assign to floor and ceiling
    floor = nums[0];
    ceiling = nums[1];
    for (i = floor; i < (ceiling +1); i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
