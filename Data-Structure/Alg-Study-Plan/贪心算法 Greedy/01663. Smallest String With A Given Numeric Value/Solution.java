class Solution {
    public String getSmallestString(int n, int k) {
        char[] result = new char[n];
        Arrays.fill(result, 'a');
        k -= n;
        for (int position = n - 1; position >= 0 && k > 0; position--) {
            int add = Math.min(k, 25);
            result[position] = (char) (result[position] + add);
            k -= add;
        }
        return new String(result);
    }
}