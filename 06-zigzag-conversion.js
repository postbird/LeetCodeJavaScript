/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let list = new Array(); // 构造一个数组
    if (numRows === 1) return s; // 如果只有一行，不需要转换，直接输出
    let currentRow = 0; // 当前行的索引
    let goDown = false; // 是否需要变换方向（行向上还是向下）
    for (let i = 0; i < s.length; i++) {
        list[currentRow] += s[i]; // 当前行加上当前字符
        if (currentRow === 0 || currentRow === numRows - 1) {
            goDown = !goDown; // 第一行和最后一行的时候需要转换方向
        }
        currentRow += goDown ? 1 : -1; // 通过 goDown 判断是否 row 往上还是往下
    }
    let res = ''
    for (let i = 0; i < list.length; i++) {
        let tmpStr = list[i].split('undefined').join(''); // 去掉 undefined 字符
        res += tmpStr; // 拼接字符
    }
    return res;
};

let str = 'LEETCODEISHIRING';
let num = 3;

console.log(convert(str, num));


