/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    return getResult(x);
};

function getResult(x) {
    const arr = x.toString().split('').reverse();
    // console.log(arr);
    let res = '';
    let start = 0;
    let len = arr.length;
    if (arr[len - 1] === '-') {
        res = arr[len - 1];
        len = len-1;
    };
    let hasNoZero = false;
    for (let i = start; i < len; i++) {
        if (arr[i] !== '0') hasNoZero = true;
        if (hasNoZero) res += arr[i];
    }
    if(!res || res > 2147483647 || res < -2147483647) return '0';
    return res;
}


let str = '120';
str = '-1000002';
str = '-100000';
str = '00000';
str = '1534236469';
console.log(reverse(str));