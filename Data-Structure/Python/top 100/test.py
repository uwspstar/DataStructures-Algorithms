def buy_sell_stock (arr) :
    max_profit = 0
    for i in range(len(arr) - 1):
        for j in range(i, len(arr)):