const palindromes = function (inStr) {
    const acceptable = '0123456789abcdefghijklmnopqrstuvwxyz';
    const stripped = inStr
        .toLowerCase()
        .split("")
        .filter((x)=> acceptable.includes(x))
        .join("");
    const reversed = stripped.split('').reverse().join('');

    return (reversed === stripped) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
