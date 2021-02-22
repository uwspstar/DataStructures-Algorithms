//anagrams : Given two strings, write a function to determine whether they are anagrams.
//https://www.byte-by-byte.com/anagrams/
{
    // 1 : toLowerCase not toLower
    // 2 : sort has to be arr, not string
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) return false;
        return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
    }
    console.log('isAnagram("", "") =', isAnagram("", ""));//isAnagram("", "") = true
    console.log('isAnagram("A", "A") =', isAnagram("A", "A"));//isAnagram("A", "A") = true
    console.log('isAnagram("A", "B") =', isAnagram("A", "B"));//isAnagram("A", "B") = false
    console.log('isAnagram("ab", "ba") =', isAnagram("ab", "ba"));//isAnagram("ab", "ba") = true
    console.log('isAnagram("AB", "ab") =', isAnagram("AB", "ab"));//isAnagram("AB", "ab") = true
    
    
    
    
    

}