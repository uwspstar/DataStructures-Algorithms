/*
Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.
 
*/
const makeChange = (arr, num) => {


}
console.log(makeChange([1, 5, 10, 25], 36));  // 3 coins (25 + 10 + 1)

/*
Using dynamic programming, we can get the minimum number of coins to create up to n by creating a list min_coins of minimum number of coins from 0 to n. At every amount up to n, we loop over the coin denomination list and determine the minimum number of coins to create (at current index idx) by min(min_coins[idx + coin], min_coins[idx] + 1). This is true as you can either create idx + coin by adding the coin value, or use a solution that has already been calculated before.

def make_change(coins, n):
  min_coins = [None] * (n + 1)
  min_coins[0] = 0

  for i in range(n):
    for c in coins:
      if i + c <= n:
        if min_coins[i + c] is not None:
          min_coins[i + c] = min(min_coins[i] + 1, min_coins[i + c])
        else:
          min_coins[i + c] = min_coins[i] + 1
  return min_coins[-1]

print(make_change([1, 5, 10, 25], 36))
# 3 coins (25 + 10 + 1)

The time complexity is O(n * k), where k is the length of coins, and the space complexity is O(n) for storing minimum coin solutions up to n.
*/