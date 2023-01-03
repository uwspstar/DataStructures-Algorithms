func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	N := len(nums)

	for i := 0; i < N; i++ {
		key := target - nums[i]
		if _, val := m[key]; val {
			return []int{m[key], i}
		}
		m[nums[i]] = i
	}
	return nil
}