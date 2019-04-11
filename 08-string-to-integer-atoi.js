/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    return getResultNew(str);
};

function getResultNew(str) {
    let res = '';
    let lt0 = false; // 判断是否小于0 最终和32位最大最小数比较有用
    str = str.replace(/^\s+|\s+$/g, ''); // 把开头和结尾的空格去掉
    if(str[0] === '-') { // 如果是以 - 开头
        lt0 = true; // 表明最终是负数
        str = str.substring(1, str.length); // 去掉开头字符
    } else if (str[0] === '+') { 
        str = str.substring(1, str.length); // 去掉开头字符
    }
    let len = str.length;
    for (let i = 0; i < len; i++) {
        regx = /\d+/;
        if (!regx.test(str[i])) { // 如果发现不是数字的，直接结束循环
            break;
        }
        res += str[i];
    }
    if(!res) return 0; // 在 - 或者 `-a`这种情况下， res 此时就是空字符，因此返回 0
    res = lt0 ? `-${res}` : res; // 负数需要加上 -
    if(res < -2147483648) return -2147483648;  // 比较大小
    if(res > 2147483647) return 2147483647;
    return res;
}
function getResult(str) { 
    let res = '';
    str = str.replace(/^\s+|\s+$/g, '');
    let regx = /^(\-|\+|\d+)/g;
    if (!str || !regx.test(str)) return 0;
    let regx2 = /\d+/g;
    if(regx.test(str) && !regx2.test(str[1])) {
        return 0;
    }
    if (str[0] === '-' || str[0] === '+') {
        res += str[0];
        str = str.substring(1, str.length);
        if(str.length === 0 || !str) {
            return 0;
        } 
    }
    let len = str.length;
    for (let i = 0; i < len; i++) {
        regx = /\d+/;
        if (!regx.test(str[i])) {
            break;
        }
        res += str[i];
    }
    if(res[0] === '+') {
        res = res.substring(1, res.length);
    }
    if(res < -2147483648) return -2147483648;
    if(res > 2147483647) return 2147483647;
    return res;
}

let str = '';

str = '  4 2 ';
str = '   -42'
str = '4193 with words'
str = 'words and 987'
str = '-91283472332'
str = '-+1';
str = '-0 1';
str = '-abc';

console.log(myAtoi(str));