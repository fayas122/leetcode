/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd = n * n;
    let sumEven = n * (n + 1);
    let gcd = 1;

    let min = Math.min(sumOdd, sumEven);

    for (let i = 1; i <= min; i++) {
        if (sumOdd % i === 0 && sumEven % i === 0) {
            gcd = i;
        }
    }

    return gcd;
};