{
    const reverseWords = function (s) {
        //return s.trim().split(/\s+/).reverse().join(' ')
        return s.trim().split(/\s+/).reverse().join(' ');

    };
    console.log(`result :`, reverseWords('a good   example'));
}
{

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        const removeSpace = (arr) => {
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                arr[i].trim().length ? result.push(arr[i]) : {};
            }
            return result;
        }
        const reverse = (arr, left = 0, right = arr.length - 1) => {
            while (left < right) {
                swap(arr, left, right);
                left++;
                right--;
            }
            return arr;
        }

    const reverseWords = function (s) {

        if (s.length < 2) return s;
        let arr = s.split(' '); 
        return reverse(removeSpace(arr)).join(' ');
    };
    
    console.log(`result :`, reverseWords('a good   example'));
}
