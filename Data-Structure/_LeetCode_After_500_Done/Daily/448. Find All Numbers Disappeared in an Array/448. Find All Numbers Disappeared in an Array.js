//448. Find All Numbers Disappeared in an Array
// has set O(N) / O(N)
{
    const findDisappearedNumbers = function (nums) {
        const n = nums.length;
        let set = new Set();
        const result = [];

        for (const num of nums) {
            set.has(num) ? {} : set.add(num);
        }

        for (let i = 1; i <= n; i++) {
            set.has(i) ? {} : result.push(i);
        }
        return result;
    };

}
{
    const findDisappearedNumbers = arr => {
        let res = [];
        let set = new Set();
        for (let i = 1; i <= n; i++) {
            if (!set.has(i)) set.add(i)
        }
        for (let i of arr) {
            if (!set.has(i)) res.push(i);
        }
        return res;
    }

}
{
    
}