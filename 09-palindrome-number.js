/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return checkIsPalindromic(x.toString());
};

function checkIsPalindromic(s) {
    let len = s.length;
    if (len === 1) return true;
    let index = Math.floor(len / 2);
    index = index % 2 !== 0 ? index : index - 1;
    for (let i = 0, j = len - 1; i < index, j >= index; i++ , j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}

let str = 0;
str = 121;
str = -121;

console.log(isPalindrome(str));