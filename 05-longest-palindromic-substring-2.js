/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    return getAllSubString(s);
};

function getResult(s) {
    const len = s.length;
    if (len <= 1) return i;
    for (let i = 0; i < len; i++) {
        let j = 0;
        let k = 0;
        while( s[i + j] === s[i-j] ) {

        }
    }
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
