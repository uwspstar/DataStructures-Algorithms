{
    const arrSum = (arr, sum = 0, i = 0) => {
        if (arr.length === 0) return 0;
        if (i >= arr.length) return sum;
        sum += arr[i];
        i++;
        return arrSum(arr, sum, i);
        
    }
    console.log('recursive:',arrSum([1, 2, 3, 4]));
}
{
    {
        const arrSum = arr => {
            if (arr.length === 0) return 0;
            let sum = 0;
            let i = 0;
            while (i < arr.length) {
                sum += arr[i];
                i++;
            }
            return sum;
        }
    
        console.log('iterator:',arrSum([1, 2, 3, 4]));
    }
     
}