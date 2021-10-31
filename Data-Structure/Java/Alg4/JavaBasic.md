---
marp: true
theme: default
header: 'java'
paginate: true
size: 16:9
---

# JAVA basic

---

# primitive type

- 1 byte = 8 bits

- 8-bit integers, with arithmetic operations (byte, 1 byte)
- 16-bit integers, with arithmetic operations (short, 2 bytes)
- 32-bit integers, with arithmetic operations (int, 4 bytes)
- 64-bit integers, with arithmetic operations (long, 8 bytes)

- 32-bit single-precision real numbers, again with arithmetic operations (float, 4 bytes)
- 64-bit double (8 bytes)
- 16-bit characters, with arithmetic operations (char, 2 bytes)
- 1-bit boolean

---

# Array

- `int[] a = new int[N];`
- `double[][] a = new double[M][N];`

```java
double[][] a = new double[M][N];
for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++) {
        a[i][j] = 0.0;
    }

```

---

# copy to another array

```java
int N = a.length;
double[] b = new double[N];
for (int i = 0; i < N; i++) {
    b[i] = a[i];
}

```

---

# reverse the elements within an array
```java
int N = a.length;
for (int i = 0; i < N/2; i++)
{
   double temp = a[i];
   a[i] = a[N-1-i];
   a[N-i-1] = temp;
}
```
