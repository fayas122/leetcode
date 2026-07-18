/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
      let smallest = Math.min(...nums);
    let largest = Math.max(...nums);

    let result = 1;

    for (let i = 1; i <= smallest; i++) {
        if (smallest % i === 0 && largest % i === 0) {
            result = i;
        }
    }

    return result;
};