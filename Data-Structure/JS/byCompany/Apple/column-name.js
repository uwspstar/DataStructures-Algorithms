/*
In many spreadsheet applications, the columns are marked with letters. From the 1st to the 26th column the letters are A to Z. Then starting from the 27th column it uses AA, AB, ..., ZZ, AAA, etc.

Given a number n, find the n-th column name.

def column_name(n):
  # Fill this in.

print column_name(26)
print column_name(27)
print column_name(28)
# Z
# AA
# AB

We can think of the problem as switching the number n from base 10 to base 26 (Number of letters). So we can take the mod 26 of the original number n to get the last digit, and then convert from a number to a letter (ie 1 -> A, 26 -> Z). An easy way to do this conversion is to get the ASCII code for A, add the result from taking mod 26, and then converting that back to a character. Since the columns start counting from 1, we need to subtract the column number by 1 so it starts from 0 to be added to the ASCII code A.

As an example, the ASCII code for A is 65, for column 1:
n = 1
remainder = (n - 1) % 26 // 0
ascii_code_a = ord("A") // 65
chr(remainder + ascii_code_a) // "A"

ord converts a character to ASCII code, and chr converts an ASCII code to a character.

So given how we can get one of the leftmost character, the results can then be divided by 26 to get the next character, and we repeat the process until n is equal to 0.

def column_name(n):
  res = ""
  while n > 0:
    res = chr((n - 1) % 26 + ord('A')) + res
    n = int((n - 1) / 26)
  return res

print column_name(26)
print column_name(27)
print column_name(28)
# Z
# AA
# AB

The time complexity is O(log n) since we divide n by 26 in every iteration which is logarithmic, and the space complexity is O(1) for using constant space.
*/