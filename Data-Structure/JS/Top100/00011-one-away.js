//One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
/*
EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bae -> false
*/

//also can put ">" and "<" logic in same function

//O(N) only check 2 cases : str1.length "===" and "<"  str2.length
// "===" replace; "<" insert;
const oneAway = (str1, str2) => {

    if (str1.length > str2.length) return oneAway(str2, str1); // always str1 short
    //if (Math.abs(str1.length - str2.length) >=2) return false
    if (str1.length - str2.length >= 2) return false;
    let counterDiff = 0;

    if (str1.length === str2.length) { //case 1:   
        for (let i = 0; i <= str1.length; i++) {
            if (str1[i] !== str2[i]) counterDiff++;
            if (counterDiff > 1) return false;
        }
    } else { //case 2 : only short 
        let j = 0; // for str 2 
        let i = 0;
        while (i <= str1.length) {
            if (str1[i] !== str2[j]) {
                if (str1[i] !== str2[i]) counterDiff++;
                if (counterDiff > 1) return false;
                j++;
            };
            i++;
            j++
        }
    }
    return true;
}

//O(n) : 3 cases
const oneAway1 = function (str1, str2) {

    let len1 = str1.length;
    let len2 = str2.length;

    if (Math.abs(len1 - len2) > 2) return false; //more than 1 letter insert or remove

    let count = 0;

    if (len1 === len2) { //replace
        for (let i = 0; i < len1; i++) {
            if (count > 2) return false;
            if (str1[i] !== str2[i]) {
                count++;
                console.log('eq: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }
    else if (len1 > len2) { //delete
        console.log('-a: ', 'str1', str1, 'str2', str2);
        for (let i = 0; i < len1; i++) {
            if (count > 2) return false;
            if (str1[i] != str2[i]) {
                count++;
                str2 = str2.substr(0, i) + str1[i] + str2.substr(i);
                console.log('a: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }
    else { //insert

        for (let i = 0; i < len2; i++) {
            console.log('-b: ', 'str1', str1, 'str2', str2);
            if (count > 2) return false;
            if (str1[i] != str2[2]) {
                count++;
                str1 = str1.substr(0, i) + str2[i] + str1.substr(i);
                console.log('b: ', 'i=', i, 'str1', str1, 'str2', str2);
            }
        }
    }

    return true;

}

console.log('str1.length === str2.length', oneAway('pale', 'bale')) //true 
console.log('str1.length === str2.length', oneAway('pale', 'pbae')) //false
console.log('case 2', oneAway('ple', 'pale')) //true
console.log('case 2', oneAway('pale', 'ple')) //true
console.log('case 2', oneAway('pales', 'pale')) //true
console.log('case 2', oneAway('pale', 'bae')) //false