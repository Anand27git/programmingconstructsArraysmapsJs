// Problem 3 - prime factors in array
function isPrimeNum(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

function getPrimeFactors(num) {
    let factorsArray = [];
    for (let i = 2; i <= num; i++) {
        while (isPrimeNum(i) && num % i == 0) {
            if (!factorsArray.includes(i))
                factorsArray.push(i);
            num /= i;
        }
    }
    return factorsArray;
}

console.log("Prime factors of 323- " + getPrimeFactors(611));
console.log("Prime factors of 75- " + getPrimeFactors(48));