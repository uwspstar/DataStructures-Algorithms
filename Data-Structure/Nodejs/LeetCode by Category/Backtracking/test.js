var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

        let map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs');
        map.set('8', 'tuv');
        map.set('9', 'wxyz');

        let res = [];
        let path = [];

        let k = digits.length;
        let nums = [];

        for (let digit of digits) {
            nums.push(map.get(digit));
        }
        //nums= [ 'abc', 'def' ]
        console.log('nums=',nums);

        //这个index是记录遍历第几个数字了，就是用来遍历digits的
        const backTracking = (idx) => {
            if (path.length === k) { 
                let tmp = path.join('');
                res.push(tmp);
            } else {
                let str = nums[idx];
                
                console.log('idx=',idx, 'str=', str);
                //取过的元素会重复取，for就是从0开始！
                for (let i = 0; i < str.length; i++){
                    path.push(str[i]);
                    console.log('str[i]=', str[i], 'path=',path,'idx + 1', idx + 1);
                    backTracking(idx + 1);
                    path.pop();
                }
            }
        }

        backTracking(0);

        return res;
};

console.log('res=', letterCombinations("23"));å