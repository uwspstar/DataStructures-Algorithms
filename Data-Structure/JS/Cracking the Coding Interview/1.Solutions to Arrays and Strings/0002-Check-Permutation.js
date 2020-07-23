// ask is case sensitive
// ask if whitespace is significant

//Given two strings, write a method to decide if one is a permutation of the other.
// confirm if the permutation comparison is case sensitive. 
// If two strings are permutations, then we know they have the same characters, but in different orders. 

// A Permutation of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.

// use sort , However, if efficiency is very important, we can implement it a different way

// check with your interviewer about the size of the character set. We assumed that the character set was ASCII

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. *** The original array will not be modified ***.

// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string

// *** keep in mind, the words order can be different ***
const checkPermutationsWithMap = function (str1, str2) {
    //O(n+n) =  O(n)
    if (str1.length != str2.length) return false;

    let len = str1.length;
    let map1 = new Map();
    let map2 = new Map();
    //O(N)
    for (let i = 0; i < len; i++) {
        map1.has(str1[i]) ? map1.set(str1[i], map1.get(str1[i]) + 1) : map1.set(str1[i], 1);
        map2.has(str2[i]) ? map2.set(str2[i], map2.get(str2[i]) + 1) : map2.set(str2[i], 1);
    }
    //O(N)
    for (let key of map1.keys()) {// always use 'of'
        if (map1.get(key) != map2.get(key)) return false;
    }
    return true;
}

//use indexOf()
const checkPermutations = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        let position = str2.indexOf(str1[i]);
        if (position < 0) return false;
        str2 = str2.slice(0, position) + str2.slice(position + 1);
    }
    return str2.length === 0;
}

const checkPermutations = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        let position = str2.indexOf(str1[i]);
        if (position < 0) {
            return false;
        } else {
            str2 = str2.slice(0, position) + str2.slice(position + 1, str2.length);
        }
    }
    return str2.length === 0;
}

const checkPermutationsWithHashMapCheckKey = function (str1, str2) {

    if (str1.length != str2.length) return false;

    let hashmap1 = {}; //object
    let hashmap2 = {};
    let len = str1.length;

    for (let i = 0; i < len; i++) {
        hashmap1[str1[i]] != undefined ? (hashmap1[str1[i]] = hashmap1[str1[i]] + 1) : (hashmap1[str1[i]] = 1);
        hashmap2[str2[i]] != undefined ? (hashmap2[str2[i]] = hashmap2[str2[i]] + 1) : (hashmap2[str2[i]] = 1);
    }

    for (let key in hashmap1) {
        if (hashmap1.key != hashmap2.key) return false;
    }
    return true;
}

const checkPermutationsJsonStringify = function (str1, str2) {

    if (str1.length != str2.length) return;

    let hashmap1 = {};
    let hashmap2 = {};
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        hashmap1[str1[i]] != undefined ? (hashmap1[str1[i]] = hashmap1[str1[i]] + 1) : (hashmap1[str1[i]] = 1);

        hashmap2[str2[i]] != undefined ? hashmap2[str2[i]] = hashmap2[str2[i]] + 1 : hashmap2[str2[i]] = 1;
    }
    // return JSON.stringify(hashmap1) == JSON.stringify(hashmap2)
    // not working, because the order is different
}

//use sort 
const checkPermutationswithSort = function (str1, str2) {
    if (str1.length != str2.length) return false;
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');
    return s1 == s2;
}
