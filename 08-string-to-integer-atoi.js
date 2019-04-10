/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    return getResultNew(str);
};

function getResultNew(str) {
    let res = '';
    let lt0 = false;
    str = str.replace(/^\s+|\s+$/g, '');
    if(str[0] === '-') {
        lt0 = true;
        str = str.substring(1, str.length);
    } else if (str[0] === '+') {
        str = str.substring(1, str.length);
    }
    let len = str.length;
    for (let i = 0; i < len; i++) {
        regx = /\d+/;
        if (!regx.test(str[i])) {
            break;
        }
        res += str[i];
    }
    if(!res) return 0;
    res = lt0 ? `-${res}` : res;
    if(res < -2147483648) return -2147483648;
    if(res > 2147483647) return 2147483647;
    return res;
}
function getResult(str) {
    let res = '';
    str = str.replace(/^\s+|\s+$/g, '');
    let regx = /\-|\+|\d+/g;
    if (!str || !regx.test(str[0])) return 0;
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
// str = '4193 with words'
// str = 'words and 987'
// str = '-91283472332'
// str = '-+1';
// str = '-0 1';
// str = '-abc';

console.log(myAtoi(str));