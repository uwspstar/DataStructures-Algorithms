// https://medium.com/javascript-in-plain-english/8-tips-to-help-you-better-optimize-your-javascript-algorithms-c226871193fc

// Tilde (~) operator in search functions.

const searchPhrase, str;
if (~searchPhrase.indexOf(str)) {
    // searchPhrase in str
} else {
    // searchPhrase not in str
}


let foo = "hello world";
foo.includes("w"); // true
foo.includes("z"); // false