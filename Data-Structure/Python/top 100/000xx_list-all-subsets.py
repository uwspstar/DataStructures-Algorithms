def generateAllSubsets(nums):
  result = [[]]

  for num in nums:
    temp = []
    for x in result:
      temp.append(x)
      temp.append([*x, num])

    result = temp

  return result


print(generateAllSubsets([1, 2, 3]))
# [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]