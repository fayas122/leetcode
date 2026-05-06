/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let m=[]
    for (let i=0; i < arr.length; i++){
                m[i] = fn(arr[i], i);

    }
    return m;
};