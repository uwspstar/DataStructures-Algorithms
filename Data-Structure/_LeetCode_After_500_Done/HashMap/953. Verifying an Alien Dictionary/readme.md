# JAVA

检查相邻单词 a 和 b 是否满足 a <= b。

为了检查相邻单词 a，b 是否满足 a <= b，只需要检查它们第一个不同的字母就可以了。例如，对于"applying" 和 "apples"，第一个不同的字母是 y 和 e。之后只需要比较这两个字母在 order 中的下标就可以了。

还需要考虑两个单词长度不等的情况。例如，当比较 "app" 和 "apply" 的时候，前三个字母都是相等的，但 "app" 比 "apply" 更短，所以满足 a <= b。

```java
class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        int[] index = new int[26];
        for (int i = 0; i < order.length(); ++i)
            index[order.charAt(i) - 'a'] = i;

        search: for (int i = 0; i < words.length - 1; ++i) {
            String word1 = words[i];
            String word2 = words[i+1];

            // Find the first difference word1[k] != word2[k].
            for (int k = 0; k < Math.min(word1.length(), word2.length()); ++k) {
                if (word1.charAt(k) != word2.charAt(k)) {
                    // If they compare badly, it's not sorted.
                    if (index[word1.charAt(k) - 'a'] > index[word2.charAt(k) - 'a'])
                        return false;
                    continue search;
                }
            }

            // If we didn't find a first difference, the
            // words are like ("app", "apple").
            if (word1.length() > word2.length())
                return false;
        }

        return true;
    }
}

作者：LeetCode
链接：https://leetcode-cn.com/problems/verifying-an-alien-dictionary/solution/yan-zheng-wai-xing-yu-ci-dian-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

# JS

```js
var isAlienSorted = function (words, order) {
  const helper = (w1, w2) => {
    for (let i = 0, j = 0; i < w1.length && j < w2.length; i++, j++) {
      let a = order.indexOf(w1[i]);
      let b = order.indexOf(w2[j]);

      if (a > b) {
        return false;
      } else if (a < b) {
        return true;
      }
    }

    return w1.length <= w2.length;
  };

  for (let i = 1; i < words.length; i++) {
    if (!helper(words[i - 1], words[i])) return false;
  }

  return true;
};
```
