/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const arr = Array.from(s); // 字符串构造数据
    const len = arr.length; // 长度
    if(len === 1) return 1; // 临界条件，如果长度是 1，不再需要计算
    let maxLen = 0; // 默认最大长度是 0 (这里是 0 的原因是下面便利的时候，是从 0 索引开始便利的)
    for (let index = 0; index < len - 1; index ++) { // 遍历 0 - len-1
        let str = `${arr[index]}`;  // 构造从 index 开始的字符串，每次都是从 index 开始
        for (let i = index + 1; i < len; i++) { // 遍历 index + 1 - len 
            if (str.indexOf(arr[i]) !== -1) { // 如果 str 已经包含了 index+n ，则当前 index 的遍历已经结束
                maxLen = str.length > maxLen ? str.length : maxLen; // 比较最大长度
                break;
            }
            str += arr[i]; // 如果当前并未包含 index+n 这个字符，需要拼接上去
            maxLen = str.length > maxLen ? str.length : maxLen; //  比较最大长度
        }
    }

    return maxLen;
};

const str = ' ';
// const str = '';
// const str = 'abcabcbb';
// const str = 'au';

console.log(lengthOfLongestSubstring(str));