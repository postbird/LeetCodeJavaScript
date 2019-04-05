// s = ada 奇数类型回文字串判断方式
// i = 0; j = 1;
s[i] = 'a';
s[i - j] = undefined; s[i + j] = 'd';
// i = 1; j = 1;
s[i] = 'd';
s[i - j] = s[0] = 'a';
s[i + j] = s[2] = 'a';
s[i - j] = s[i + j];
tmpStr = 'ada';
// i = 1; j = 2;
s[i - j] = s[-1] = undefined; // continue;
// i = 2; j = 1;
s[i] = s[2] = 'a';
s[i - j] = s[1] = 'd';
s[i + j] = s[3] = 'm';
s[i - j] !== s[i + j] // continue;
// i = 3; j = 1;
s[i] = s[3] = 'm';
s[i - j] = s[2] = 'a';
s[i + j] = s[4] = undefined; // continue;
//result
res = ada;

// s = bbbb 偶数类型回文字串判断方式
// i = 0; j = 1;
continue; // 不具备判断条件
// i = 1; j = 1;
s[i - j] = s[0] = 'b';
s[i + j - 1] = s[1] = 'b';
tmpStr = 'bb';
//i = 1; j = 2;
s[i - j] = s[-1] = undefined;
continue;
// i = 2; j = 1
s[i - j] = s[1] = 'b';
s[i + j - 1] = s[2] = 'b';
tmpStr = 'bb';
// i = 2; j = 2
s[i - j] = s[0] = 'c';
s[i + j - 1] = s[3] = 'd';
res = 'bb';