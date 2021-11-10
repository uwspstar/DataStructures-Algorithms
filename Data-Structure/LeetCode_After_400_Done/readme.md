# Notes for a new java developer

- https://www.w3schools.com/java/default.asp

---

# Package

- `import java.util.*;` List<String> s = new ArrayList();

---

# Basic

- `class GenerateParenthesis`, no need use public
- `public static void main (String[] args)` , do not forget `static`
- `path.append(c);` StringBuilder append
- `path.deleteCharAt(path.length() - 1);` StringBuilder delete Char
- `index[str.charAt(i) - 'a'] = i ;` str charAt(i)

---

### HashMap

- `import java.util.HashMap`

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

---

### Java HashSet

- `import java.util.HashSet;`
- A HashSet is a collection of items where every item is unique, and it is found in the `java.util` package:
- To check whether an item exists in a HashSet, use the `contains()` method:
- To remove an item, use the `remove()` method:
- To remove all items, use the `clear()` method:
- To find out how many items there are, use the `size()` method:

```java
import java.util.HashSet; // Import the HashSet class

HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW");
cars.add("Mazda");

cars.contains("Mazda");
cars.remove("Volvo");
cars.clear();
cars.size();

for (String i : cars) {
  System.out.println(i);
}
```

---

### ArrayList

- `import java.util.ArrayList;`
- The ArrayList class is a `resizable array`, which can be found in the `java.util` package.
- To access an element in the ArrayList, use the `get()` method and refer to the index number:
- To modify an element, use the `set()` method and refer to the index number
- To remove an element, use the `remove()` method and refer to the index number:
- To remove all the elements in the ArrayList, use the `clear()` method:
- To find out how many elements an ArrayList have, use the `size()` method

```java
ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("Mazda");

cars.get(0);
cars.set(0, "Opel");
cars.remove(0);
cars.clear();
cars.size();

for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
 for (String i : cars) {
      System.out.println(i);
    }
```

---

### Sort an ArrayList

- `java.util.Collections`
- Another useful class in the java.util package is the Collections class, which include the `sort()` method for sorting lists alphabetically or numerically:`

```java
import java.util.ArrayList;
import java.util.Collections;  // Import the Collections class

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    Collections.sort(cars);  // Sort cars
    for (String i : cars) {
      System.out.println(i);
    }
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
  }
}
```

---

```java
import java.util.ArrayList;
import java.util.Collections;  // Import the Collections class

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> myNumbers = new ArrayList<Integer>();
    myNumbers.add(33);
    myNumbers.add(15);
    myNumbers.add(20);
    myNumbers.add(34);
    myNumbers.add(8);
    myNumbers.add(12);

    Collections.sort(myNumbers);  // Sort myNumbers

    for (int i : myNumbers) {
      System.out.println(i);
    }
  }
}
```
