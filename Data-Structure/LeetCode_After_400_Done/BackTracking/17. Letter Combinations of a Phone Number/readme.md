```java

首先使用哈希表存储每个数字对应的所有可能的字母，然后进行回溯操作。

回溯过程中维护一个字符串，表示已有的字母排列（如果未遍历完电话号码的所有数字，则已有的字母排列是不完整的）。该字符串初始为空。每次取电话号码的一位数字，从哈希表中获得该数字对应的所有可能的字母，并将其中的一个字母插入到已有的字母排列后面，然后继续处理电话号码的后一位数字，直到处理完电话号码中的所有数字，即得到一个完整的字母排列。然后进行回退操作，遍历其余的字母排列。

回溯算法用于寻找所有的可行解，如果发现一个解不可行，则会舍弃不可行的解。在这道题中，由于每个数字对应的每个字母都可能进入字母组合，因此不存在不可行的解，直接穷举所有的解即可

```

# JAVA

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> combinations = new ArrayList<String>();
        if (digits.length() == 0) {
            return combinations;
        }
        Map<Character, String> phoneMap = new HashMap<Character, String>() {{
            put('2', "abc");
            put('3', "def");
            put('4', "ghi");
            put('5', "jkl");
            put('6', "mno");
            put('7', "pqrs");
            put('8', "tuv");
            put('9', "wxyz");
        }};
        backtrack(combinations, phoneMap, digits, 0, new StringBuffer());
        return combinations;
    }

    public void backtrack(List<String> combinations, Map<Character, String> phoneMap, String digits, int index, StringBuffer combination) {
        if (index == digits.length()) {
            combinations.add(combination.toString());
        } else {
            char digit = digits.charAt(index);
            String letters = phoneMap.get(digit);
            int lettersCount = letters.length();
            for (int i = 0; i < lettersCount; i++) {
                combination.append(letters.charAt(i));
                backtrack(combinations, phoneMap, digits, index + 1, combination);
                combination.deleteCharAt(index);
            }
        }
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/dian-hua-hao-ma-de-zi-mu-zu-he-by-leetcode-solutio/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

# JAVA

```java
class Solution {

    List<String> res = new ArrayList<>();
    StringBuilder temp = new StringBuilder();
    String[] mapStr = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) return res;
        backTracking(digits, 0);
        return res;
    }
    
    public void backTracking(String digits, int idx) {
        if (idx == digits.length()) {
            res.add(temp.toString());
            return;
        } else {
            String str = mapStr[digits.charAt(idx) - '0'];//str 表示当前num对应的字符串
            for (int i = 0; i < str.length(); i++) {
                temp.append(str.charAt(i));
                backTracking(digits, idx + 1);
                temp.deleteCharAt(temp.length() - 1);
            }
        }
    }
}
```

# JS

```js
const getNums = (arr, digits) => {
  let map = new Map();
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');
  let str = '';
  for (let i = 0; i < digits.length; i++) {
    let key = digits[i];
    let val = map.get(key);
    arr.push(val);
  }
};
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let res = [];
  let path = [];
  let len = digits.length;
  let nums = []; //exp: ['abc','def']
  getNums(nums, digits);
  const backTrack = (idx) => {
    if (path.length === len) {
      res.push([...path].join(''));
      return;
    } else {
      //idx，就是用来遍历digits的（题目中给出数字字符串），同时idx也表示树的深度。
      let str = nums[idx];
      for (let i = 0; i < str.length; i++) {
        path.push(str[i]);
        backTrack(idx + 1);
        path.pop();
      }
    }
  };
  backTrack(0); // depth
  return res;
};
```
