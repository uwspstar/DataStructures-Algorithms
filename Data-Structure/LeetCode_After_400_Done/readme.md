# Notes for a new java developer

# Package

- `import java.util.*;` List<String> s = new ArrayList();

---

# Basic

- `class GenerateParenthesis`, no need use public
- `public static void main (String[] args)` , do not forget `static`
- `path.append(c);` StringBuilder append
- `path.deleteCharAt(path.length() - 1);` StringBuilder delete Char

### HashMap

```java
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
```
