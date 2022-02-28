class Solution {
    public int minInsertions(String s) {
        int res = 0, need = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                need += 2;
                if (need % 2 == 1) {
                    res++;
                    need--;
                }
            }

            if (s.charAt(i) == ')') {
                need--;
                if (need == -1) {
                    res++;
                    need = 1;
                }
            }
        }

        return res + need;
    }
}
