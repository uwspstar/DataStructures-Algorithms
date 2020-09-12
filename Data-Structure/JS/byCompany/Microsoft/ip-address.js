/*
An IP Address is in the format of A.B.C.D, where A, B, C, D are all integers between 0 to 255.

Given a string of numbers, return the possible IP addresses you can make with that string by splitting into 4 parts of A, B, C, D.

Keep in mind that integers can't start with a 0! (Except for 0)

Input: 1592551013 Output: ['159.255.101.3', '159.255.10.13']

We can use a greedy solution to try out all possible integers for A, then B, then C, then D, and if that combination of ABCD doesn't work (ie there's still more numbers remaining) we backtrack and try out a different combination.

Also since the numbers go up to 255, so each part can only have a length of 1, 2 or 3 of the string s. So for part A, we can try a length of 3 first, while making sure the integer value is between 100 to 255 (cannot start with a 0). Then try a length of 2, while making sure the integer is between 10 to 99, and then try a length of 1 (will always work).

We can try the same for B, C, and D by making the function recursive, with an end condition when we have exactly 4 ip parts. If the string is empty at that point (used up all numbers), then return that as one of our results.

def ip_addresses(s, ip_parts=[]):
  if len(ip_parts) == 4:
    if s:
      return []
    else:
      return [".".join(ip_parts)]
  if not s:
    return []
  res = []
  if len(s) > 2 and 100 <= int(s[:3]) <= 255:
    res += ip_addresses(s[3:], ip_parts + [s[:3]])
  if len(s) > 1 and 10 <= int(s[:2]) <= 99:
    res += ip_addresses(s[2:], ip_parts + [s[:2]])

  res += ip_addresses(s[1:], ip_parts + [s[:1]])
  return res

print ip_addresses('1592551013')
# ['159.255.101.3', '159.255.10.13']

Since IP Addresses are limited in length (at most 12 numbers), and we terminate once we have 4 parts, no matter how long our input is we terminate after reading 12 numbers. Our recursive depth is also limited by the number of IP parts, and hence since we know the maximum number of runs the solution will make no matter the input, the time complexity is O(1).
*/