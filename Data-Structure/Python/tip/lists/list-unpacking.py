nums = list(range(4))
first, second, third, fourth = nums
print(f'first={first},second={second},fourth={fourth}')

nums2 = list(range(4))
first, second, *others = nums2
print(f'first={first},second={second},others={others}')


nums3 = list(range(4))
first, *others, last = nums3
print(f'first={first},others={others}, last={last}')
