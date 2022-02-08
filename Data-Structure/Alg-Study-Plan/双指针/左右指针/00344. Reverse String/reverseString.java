public class Solution {
    void reverseString(char[] arr) {
        int left = 0;
        int right = arr.length - 1;
        while (left < right) {
            // 交换 arr[left] 和 arr[right]
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}

    
