/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return checkIsPalindromic(x.toString());
};

function checkIsPalindromic(s) {
    let len = s.length;
    if (len === 1) return true; // 如果长度是1 直接返回当前字符串本身
    let index = Math.floor(len / 2); // 获取中间值：3 -> 1 ; 4 -> 2 
    // index 是两边遍历的终结点，如果是奇数则是中间字符，如果是偶数则是假想的中间字符
    // 因为代码不存在假想，需要手动处理下这个流程见下面
    index = index % 2 !== 0 ? index : index - 1; 
    // 两边需要查看是否相等：
    // 0 开始正序：遍历到 index-1
    // len-1 开始倒序：遍历到 index 
    for (let i = 0, j = len - 1; i < index, j >= index; i++ , j--) {
        if (s[i] !== s[j]) {
            return false; // 只要不相等就返回 false
        }
    }
    return true;
}

let str = 0;
str = 121;
str = -121;

console.log(isPalindrome(str));