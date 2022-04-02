# Ultimate DP Study Plan 21 days

- 【跟我一起写代码】LeetCode DP 终极学习计划！Day1-3 Python3 实现 https://www.youtube.com/watch?v=LG0adDNnnYg
- Python Tutorial https://www.w3schools.com/python/default.asp

---

# for new Python developer

- https://www.w3schools.com/python/default.asp
- `python --version`
- `C:\Users\Your Name>python helloworld.py`

---

### The Python Command Line

- `C:\Users\Your Name>python`
- `>> exit()`

---

### Execute Python Syntax

- `C:\Users\Your Name>python myfile.py`

---

### indentation

- Python will give you an error if you skip the indentation:
- The number of spaces is up to you as a programmer, but it has to be at least one.
- You have to use the same number of spaces in the same block of code

---

### Python Variables

- Python has no command for declaring a variable.
- Variables can even change type after they have been set.
- In Python, `variables are created when you assign a value to it`
- you can add a multiline string (`triple quotes`) in your code

---

### Casting

```py
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

- String variables can be declared either by using single or double quotes:

---

### Case-Sensitive

```py
a = 4
A = "Sally"
#A will not overwrite a
```

---

### Get the Type

```py
x = 5
y = "John"
print(type(x))
print(type(y))
```

---

### Comments start with a #,

- Comments start with a #,

---

### Python Variables

- Assign Multiple Values
  - Make sure the number of variables matches the number of values, or else you will get an error.
  - `x, y, z = "Orange", "Banana", "Cherry"`
- One Value to Multiple Variables
  - `x = y = z = "Orange"`
- Unpack a Collection

```py
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
```

---

### If you try to combine a string and a number, Python will give you an error:

```py
x = 5
y = "John"
print(x + y)
```

---

### Global Variables vs The global Keyword

- Variables that are created outside of a function (as in all of the examples above) are known as global variables. It can be used by everyone, both inside of functions and outside.
- If you use the global keyword, the variable belongs to the global scope: Also, use the global keyword if you want to change a global variable inside a function.

---

### Built-in Data Types

- Text Type: `str`
- Numeric Types: `int, float, complex`
- `Sequence Types`: `list, tuple, range`
- Mapping Type: `dict`
- Set Types: `set, frozenset`
- Boolean Type: `bool`
- Binary Types: `bytes, bytearray, memoryview`

---

```py
x = 1j	complex
x = ["apple", "banana", "cherry"]	list
x = ("apple", "banana", "cherry")	tuple
x = range(6)	range
x = {"name" : "John", "age" : 36}	dict
x = {"apple", "banana", "cherry"}	set
x = frozenset({"apple", "banana", "cherry"})	frozenset
x = True	bool
x = b"Hello"	bytes
x = bytearray(5)	bytearray
x = memoryview(bytes(5))	memoryview
```

---

# Setting the Specific Data Type

- If you want to specify the data type, you can use the following constructor functions:

```py
x = str("Hello World")	str
x = int(20)	int
x = float(20.5)	float
x = complex(1j)	complex
x = list(("apple", "banana", "cherry"))	list
x = tuple(("apple", "banana", "cherry"))	tuple
x = range(6)	range
x = dict(name="John", age=36)	dict
x = set(("apple", "banana", "cherry"))	set
x = frozenset(("apple", "banana", "cherry"))	frozenset
x = bool(5)	bool
x = bytes(5)	bytes
x = bytearray(5)	bytearray
x = memoryview(bytes(5))	memoryview
```

---

### Python Numbers

- Float can also be scientific numbers with an "e" to indicate the power of 10.

```py
x = 35e3
y = 12E4
z = -87.7e100
```

- Complex

```py
x = 3+5j
y = 5j
z = -5j
```

---

### Random Number

- Import the random module, and display a random number between 1 and 9:

```py
import random

print(random.randrange(1, 10))
```

### Strings are Arrays

```py
a = "Hello, World!"
print(a[1])

for x in "banana":
  print(x)

print(len(a))
```

---

### Check String

```py
txt = "The best things in life are free!"
print("free" in txt)
print("expensive" not in txt)

if "free" in txt:
  print("Yes, 'free' is present.")

if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
```

---

### Slicing Strings

```py
b = "Hello, World!"
print(b[2:5]) # Get the characters from position 2 to position 5 (not included):

print(b[:5]) # from the start to position 5 (not included):

print(b[2:]) # from position 2, and all the way to the end:
```

---

### Python String Methods

- https://www.w3schools.com/python/python_ref_string.asp
  - Split String : split()
  - Replace : replace()
  - Remove Whitespace : strip()

---

### Negative Indexing

- Use negative indexes to start the slice from the end of the string:

```py
# From: "o" in "World!" (position -5)
# To, but not included: "d" in "World!" (position -2):
b = "Hello, World!" # ! is -1, d is -2
print(b[-5:-2])

```

---

### Python Lists

- A list can contain different data types:
- List items are `ordered`, `changeable`, and `allow duplicate values`.
- The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
- `Lists` are used to store multiple items in a single variable.
- Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are `Tuple`, `Set`, and `Dictionary`, all with different qualities and usage.
- `len()` function
- From Python's perspective, lists are defined as objects with the data type 'list':

---

### The list() Constructor

- Using the list() constructor to make a List:

```py
alist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(alist)
```

---

### Python Collections (Arrays)

- There are four collection data types in the Python programming language:

- `Lis`t is a collection which is `ordered` and `changeable`. Allows `duplicate` members.
- `Tuple` is a collection which is `ordered` and `unchangeable`. Allows `duplicate` members.
- `Set` is a collection which is `unordered`, `unchangeable*`, and `unindexed`. No `duplicate` members. `Set` items are unchangeable, but you can `remove` and/or `add` items whenever you like
- `Dictionary` is a collection which is `ordered**` and `changeable`. No `duplicate` members.As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.

---

### Parameters or Arguments?

- The terms parameter and argument can be used for the same thing: information that are passed into a function.
- From a function's perspective:
  - A parameter is the variable listed inside the parentheses in the function definition.
  - An argument is the value that is sent to the function when it is called.

---

### Arbitrary Arguments, `*args`

- If the number of arguments is unknown, add a `*` before the parameter name:

```py
def my_function(*kids):
print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")
```

---

### Recursion
