// TwoSum II 
/*
要求我们设计一个类，拥有两个 API：
*/
class TwoSum {
    Set<Integer> sum = new HashSet<>();
    List<Integer> nums = new ArrayList<>();

    // 向数据结构中添加一个数 number
    public void add(int number) {
        for (int n : nums) {
            sum.add(n + nums);
        }
        nums.add(number);
    }

    // 寻找当前数据结构中是否存在两个数的和为 value
    public boolean find(int value) {
        return sum.contains(value);
    }
}
