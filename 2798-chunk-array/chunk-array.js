/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let subarray=[];
    for (let i = 0; i < arr.length; i += size) {
    subarray.push(arr.slice(i, i + size));
    }
    return subarray;

};
