/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    return getResult(x);
};

function getResult(x) {
    const arr = x.toString().split('').reverse(); // 数组反转
    let res = '';
    let start = 0;
    let len = arr.length;
    if (arr[len - 1] === '-') { // 如果反转之后最后一个是 - 则把 - 提到最前面
        res = arr[len - 1];
        len = len - 1; // 长度 -1
    };
    let hasNoZero = false; // 判断是否还是存在 0
    for (let i = start; i < len; i++) {
        if (arr[i] !== '0') hasNoZero = true; // 从第一个开始遍历，如果不存在 0 则可以拼接字符串
        if (hasNoZero) res += arr[i];
    }
    // 溢出判断
    // if (!res || res > 2147483647 || res < -2147483647) return '0';
    if(checkIsOut(res)) {
        return '0';
    }
    
    return res;
}

function checkIsOut(num) {
    if(!num) return false;
    num = num.toString();
    let lt0 = false;
    if (num[0] === '-') {
        // 负数 
        lt0 = true;
        num = num.substring(1, num.length - 1);
    }
    // 109
    const count = '7463847412';
    if(count.length > num.length && !lt0) {
        return false; 
    } else if(count.length < num.length && !lt0) {
        return true;
    }
    console.log(num);
    if(count.length > num.length && lt0) {
        return false; 
    } else if(count.length < num.length && lt0) {
        return true;
    }
    let len = count.length;

    for (let i = 0; i < len; i++) {
        if(num[i] === count [i]) continue;
        if(!lt0) {
            if(num[i] < count[i]) {
                return false;
            } else {
                return true;
            }
        } else {
            console.log(num[i], count[i])
            if(num[i] > count[i]) {
                return false;
            } else {
                return true;
            }
        }
    }
    return false;
}


let str = '120';
str = '-1000002';
str = '-100000';
str = '00000';
str = '1534236469';
str = '-123';
str = '10';
str = '-901000';
str = '-2147483648';

console.log(reverse(str));