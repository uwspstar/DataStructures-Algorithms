递归（Recursion）是编程中的一种技巧，它允许一个函数调用自身来解决问题。在一些复杂问题中，递归函数可能需要在每一步产生多个递归调用，形成多分支（Two Branch）递归。典型的例子包括计算斐波那契数列和解决组合问题。

### 两分支递归的示例：斐波那契数列

斐波那契数列是两分支递归的经典示例。斐波那契数列的递归定义如下：

\[ F(n) = F(n-1) + F(n-2) \]

基准情况是：

\[ F(0) = 0 \]
\[ F(1) = 1 \]

#### 递归实现斐波那契数列

```python
def fibonacci_recursive(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# 测试递归计算斐波那契数列
print(fibonacci_recursive(10))  # 输出：55
```

### 详细过程解释

1. **初始调用**：`fibonacci_recursive(10)`
   - 返回 `fibonacci_recursive(9) + fibonacci_recursive(8)`

2. **第二次调用**：`fibonacci_recursive(9)`
   - 返回 `fibonacci_recursive(8) + fibonacci_recursive(7)`

3. **第三次调用**：`fibonacci_recursive(8)`
   - 返回 `fibonacci_recursive(7) + fibonacci_recursive(6)`

这个过程会继续展开，直到到达基准情况 `F(1)` 和 `F(0)`。在回溯过程中，将所有结果累加起来，最终得到 `F(10)` 的值。

### 复杂度分析

- **时间复杂度**：`O(2^n)` - 因为每个函数调用都会产生两个递归调用，导致指数级增长。
- **空间复杂度**：`O(n)` - 递归调用栈的深度为 `n`。

### 优化递归：记忆化递归（Memoization）

由于两分支递归会产生大量重复计算，可以通过记忆化递归来优化。记忆化递归使用缓存来存储已经计算过的结果，避免重复计算。

```python
def fibonacci_memo(n: int, memo=None) -> int:
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        result = n
    else:
        result = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    memo[n] = result
    return result

# 测试记忆化递归计算斐波那契数列
print(fibonacci_memo(10))  # 输出：55
```

### 复杂度分析（记忆化递归）

- **时间复杂度**：`O(n)` - 因为每个值只计算一次。
- **空间复杂度**：`O(n)` - 用于存储递归调用栈和缓存的空间。

### 两分支递归的另一个示例：组合数

计算组合数也是两分支递归的一个经典示例。组合数 \( C(n, k) \) 的定义为：

\[ C(n, k) = C(n-1, k-1) + C(n-1, k) \]

基准情况是：

\[ C(n, 0) = 1 \]
\[ C(n, n) = 1 \]

#### 递归实现组合数

```python
def combination_recursive(n: int, k: int) -> int:
    if k == 0 or k == n:
        return 1
    return combination_recursive(n - 1, k - 1) + combination_recursive(n - 1, k)

# 测试递归计算组合数
print(combination_recursive(5, 2))  # 输出：10
```

### 复杂度分析

- **时间复杂度**：`O(2^n)` - 因为每个函数调用都会产生两个递归调用，导致指数级增长。
- **空间复杂度**：`O(n)` - 递归调用栈的深度为 `n`。

### 优化递归：记忆化递归（Memoization）

可以通过记忆化递归来优化计算组合数。

```python
def combination_memo(n: int, k: int, memo=None) -> int:
    if memo is None:
        memo = {}
    if (n, k) in memo:
        return memo[(n, k)]
    if k == 0 or k == n:
        result = 1
    else:
        result = combination_memo(n - 1, k - 1, memo) + combination_memo(n - 1, k, memo)
    memo[(n, k)] = result
    return result

# 测试记忆化递归计算组合数
print(combination_memo(5, 2))  # 输出：10
```

### 复杂度分析（记忆化递归）

- **时间复杂度**：`O(n * k)` - 因为每个组合数只计算一次。
- **空间复杂度**：`O(n * k)` - 用于存储递归调用栈和缓存的空间。

### 总结

- **两分支递归**：适用于一些自然递归定义的问题，但效率低下，通常需要优化。
- **记忆化递归**：通过缓存避免重复计算，大大提高效率。
- **复杂度分析**：了解时间和空间复杂度有助于选择合适的算法。

理解递归和优化技术（如记忆化）有助于解决复杂的递归问题，提高程序的效率。如果有其他问题或需要进一步的解释，请随时告诉我。
