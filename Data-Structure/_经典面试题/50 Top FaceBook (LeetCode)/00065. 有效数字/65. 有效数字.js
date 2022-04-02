var isNumber = function(s) {
    s = s.trim();
// rules 
// characters can be -- 0 ~ 9 . e + - 
// + - => should be at index 0 or right after e
// . => max 1, and must not be after e
// e => max 1, and must have numbers before and after
    
    
// loop over the characters and check if any of the rules is broken
    
    let hasDigit = false;
    let hasDot = false;
    let hasE = false;
    
    for(let i = 0; i< s.length; i++) {
        const char = s[i];
        if(char >=0 && char <=9) {
            hasDigit = true;
        } else if(char === "+" || char === "-") {
            if(i != 0 && s[i-1] !== "e" && s[i-1] !== "E") {
                return false;
            } 
        } else if(char === ".") {
            if(hasDot || hasE) {
                return false;
            }
            hasDot = true;
        } else if(char === "e" || char === "E") {
            if(hasE || !hasDigit) {
                return false;
            }
            hasE = true;
            hasDigit = false;
        } else {
           return false;
        }
    }
    return hasDigit;
};