/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
   return getAllSubString(s);
};

function getAllSubString(s) {
    const len = s.length;
    let res = '';
    for (let i = 0; i < len; i++) {
        let tmpStr = s[i];
        if(checkIsPalindromic(tmpStr) && res.length < tmpStr.length) {
            res = tmpStr;
        }
        for (let j = i + 1; j < len; j++) {
            tmpStr += s[j];
            if(checkIsPalindromic(tmpStr) && res.length < tmpStr.length) {
                res = tmpStr;
            } 
        }
    }
    return res;
}

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

let str;
str = 'babad'; // 1
str = 'cbbd'
str = 'b';
str = 'bb';
// str = '';
str = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv";


// console.log(checkIsPalindromic(str));
console.log(longestPalindrome(str));
