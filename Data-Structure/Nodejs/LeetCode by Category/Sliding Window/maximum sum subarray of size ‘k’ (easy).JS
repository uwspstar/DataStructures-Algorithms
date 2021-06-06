//maximum sum subarray of size ‘k’ (easy)
//https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/
{
    function maxSum(arr,n,k)
    {
        if (n < k) return -1;
        let res = 0;

        for (let i=0; i<k; i++) {
            res += arr[i];  //  first k
        }
    
        let curr_sum = res;
        
        for (let i=k; i<n; i++)
        {
            curr_sum += arr[i] - arr[i-k];
            res = Math.max(res, curr_sum);
        }
     
        return res;
    }
}