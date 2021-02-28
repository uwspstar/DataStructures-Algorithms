{
    // 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。空字符串定义为有效的回文串
    const isPalindrome = str => {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    }
    console.log('isPalindrome("A man, a plan, a canal: Panama")', JSON.stringify(isPalindrome("A man, a plan, a canal: Panama"))) //true
    console.log('isPalindrome("race a car")', JSON.stringify(isPalindrome("race a car"))) //false
}