public class AlienWords {

    public boolean isAlienSorted(String[] words, String order) {

        int[] index = new int[26];
        for (int i = 0; i < order.length(); i++) {
            index[order.charAt(i) - 'a'] = i;
        }

        for (int i = 1; i < words.length; i++) {
            if (!isRightOrder(words[i - 1], words[i], index)) {
                return false;
            }
        }
        return true;
    }

    public boolean isRightOrder(String w1, String w2, int[] index) {
        int N = Math.min(w1.length(), w2.length());

        for (int i = 0; i < N; i++) {
            int a = index[w1.charAt(i) - 'a'];
            int b = index[w2.charAt(i) - 'a'];

            if (a > b)
                return false;
            if (a < b)
                return true;
        }

        return w1.length() < w2.length();

    }

    public static void main(String[] args) {
        AlienWords test = new AlienWords();
        String[] words1 = { "hello", "leetcode" };
        String order1 = "hlabcdefgijkmnopqrstuvwxyz";
        System.out.println(test.isAlienSorted(words1, order1)); // true

        String[] words2 = { "word", "world", "row" };
        String order2 = "worldabcefghijkmnpqstuvxyz";
        System.out.println(test.isAlienSorted(words2, order2)); // false
    }
}
