def buy_and_sell_naive(arr):
    max_profit = 0
    for i in range(len(arr) - 1):
        for j in range(i, len(arr)):
            buy_price, sell_price = arr[i], arr[j]
            max_profit = max(max_profit, sell_price - buy_price)
    return max_profit


def buy_and_sell(arr):
    max_profit, current_max = 0, 0
    for price in reversed(arr):
        current_max = max(current_max, price)
        potential_profit = current_max - price
        max_profit = max(max_profit, potential_profit)
    return max_profit


print('buy_and_sell', buy_and_sell([9, 11, 8, 5, 7, 10]))  # 5
print('buy_and_sell_naive', buy_and_sell_naive([9, 11, 8, 5, 7, 10]))  # 5
