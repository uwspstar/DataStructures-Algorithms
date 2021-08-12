/*
Given two strings, find if there is a one-to-one mapping of characters between the two strings.

Example
Input: abc, def
Output: True # a -> d, b -> e, c -> f

Input: aab, def
Output: False # a can't map to d and e 
*/

//with ASCII code , if we check it map with same rule
const hasCharacterMap = (str1, str2) => {
    if (str1.length !== str1.length) return false;
    if (str1.length === 0 || str1.length === 0) return true;
    const distance = str1.charCodeAt(0) - str2.charCodeAt(0);
    console.log('distance', distance, 'str1.charCodeAt(0)', str1.charCodeAt(0), 'str2.charCodeAt(0)', str2.charCodeAt(0))
    for (let i = 1; i < str1.length; i++) {
        let newDistance = str1.charCodeAt(i) - str2.charCodeAt(i);
        if (distance != newDistance) return false;
    }
    return true;
}

// this is if not rule, but 1 to 1 map
const hasCharacterMapNotASCIIRule = (str1, str2) => {
    if (str1.length !== str1.length) return false;
    if (str1.length === 0 || str1.length === 0) return true;
    let map = new Map();
    for (let i = 0; i < str1.length; i++) {
        let key = str1[i];
        let value = str2[i]
        if (!map.get(key)) {
            map.set(key, value);
        } else {
            if (map.get(key) !== value) return true;
        }
    }
    return true;
}
console.log('hasCharacterMap - 1', hasCharacterMap('abc', 'def')); //true
console.log('hasCharacterMap - 2', hasCharacterMap('aab', 'bef')); //false
console.log('hasCharacterMap - 3', hasCharacterMap('acd', 'ced')); //false
console.log('hasCharacterMap - 4', hasCharacterMap('', '')); //true
console.log('hasCharacterMap - 5', hasCharacterMap('b', 'a')); //true