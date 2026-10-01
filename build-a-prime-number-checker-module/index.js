function isPrime(num) {
    if (num === 1) {
        return false;
    }else if (num % 2) {
        return false;
    }else {
        return true;
    }
}

module.exports = isPrime;