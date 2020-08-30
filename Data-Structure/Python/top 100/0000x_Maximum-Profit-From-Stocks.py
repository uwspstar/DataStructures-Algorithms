"""
You are given an array. Each element represents the price of a stock on that particular day. Calculate and return the maximum profit you can make from buying and selling that stock "only once".

For example: [9, 11, 8, 5, 7, 10]

Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).

def buy_and_sell(arr):
  # Fill this in.

print buy_and_sell([9, 11, 8, 5, 7, 10])
# 5
"""

# O(N^2)
def buy_and_sell_naive(arr):
    max_profit = 0
    for i in range(len(arr) - 1):
        for j in range(i, len(arr)):
            buy_price, sell_price = arr[i], arr[j]
            max_profit = max(max_profit, sell_price - buy_price)
    return max_profit


print(buy_and_sell_naive([9, 11, 8, 5, 7, 10]))

# O(N)
# If iterate the array backwards, and keep track of the highest price so far (this will be the best sell price for any element to its left).
def buy_and_sell(arr):
    current_max, max_profit = 0, 0
    for price in reversed(arr):
        current_max = max(current_max, price)
        potential_profit = current_max - price
        max_profit = max(max_profit, potential_profit)
    return max_profit


print(buy_and_sell([9, 11, 8, 5, 7, 10]))
