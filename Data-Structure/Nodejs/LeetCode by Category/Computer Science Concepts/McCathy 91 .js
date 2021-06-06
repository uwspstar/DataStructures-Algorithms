//output when num=98.
/*
define recur(num):
2      if num > 100:
3          return num - 10
4      else:
5          return recur(recur(num + 11))
*/

recur(98 + 11 = 109) ->99
recur(99)-> recur(recur(99 + 11)) 
-> recur(110)->recur(recur(110 + 11)) 
-> recur(100) ->recur(111)->recur(91)

/*
recur(99) = recur(recur(110)) since 99 ≤ 100
          = recur(100)        since 110 > 100
          = recur(recur(111)) since 100 ≤ 100
          = recur(101)        since 111 > 100
          = 91                since 101 > 100
          */