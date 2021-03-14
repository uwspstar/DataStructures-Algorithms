{
    const canConstruct =  (ransomNote, magazine) =>{
        //你可以假设两个字符串均只含有小写字母
        if (magazine.length < ransomNote.length) return false;
        let arr = Array(26).fill(0);
        console.log('arr1 :', arr);
        for (let i = 0; i < magazine.length; i++) {
            let code = magazine.charCodeAt(i);
            console.log('i', i, 'code1 :', code);
            arr[code - 97]++;
        }
        console.log('arr2 :', arr);
        for (let i = 0; i < ransomNote.length; i++) {
            let code = ransomNote.charCodeAt(i);
            console.log('i', i, 'code1 :', code);
            arr[code - 97]--;
            console.log('code : ', code, '-- arr[code - 97]', arr[code - 97]);
            if (arr[code - 97] < 0) return false;
            console.log('arr4 :', arr);
        }
        console.log('arr3 :', arr);
        return true;
    }
    console.log('canConstruct', canConstruct('aa', 'ab'));
}
{
    var canConstruct = function(ransomNote, magazine) {
        let magazineCopy = magazine
        if (ransomNote.length > magazine.length) return false;
        let ransomArr = ransomNote.split("")
        ransomArr.forEach(function replacer(item, index) {
          magazine = magazine.replace(item, "");
        });
        return magazine.length === magazineCopy.length - ransomArr.length;
      };
}