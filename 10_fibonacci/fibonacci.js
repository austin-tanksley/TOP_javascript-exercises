const fibonacci = function(num) {
    fib = [];
    if (num<0){
        return 'OOPS'
    }
    if (typeof(num)=="string"){
        num = Number(num);
    }
    if (num === 0 || typeof(num)!= "number"){
        return 0;
    }
    while ( fib.length < 2) {
        fib.push(1);
    }
    for (i = 2; i < num; i++) {
        fib.push((fib[i-1])+(fib[i-2]));
    };
    return fib[fib.length-1];
    // return fib;
};

// Do not edit below this line
module.exports = fibonacci;
