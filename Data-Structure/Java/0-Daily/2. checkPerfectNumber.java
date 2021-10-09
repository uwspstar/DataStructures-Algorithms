class Solution {
    public boolean checkPerfectNumber(int num) {
        int sumDivisor = 0;
        // no odd perfect number
        if (num % 2 != 0)
            return false;
        for (int i = 1; i < num; i++) {
            // divided evenly - found a divisor
            if (num % i == 0) {
                sumDivisor = sumDivisor + i;
            }
        }
        if (sumDivisor == num)
            return true;
        return false;
    }
}