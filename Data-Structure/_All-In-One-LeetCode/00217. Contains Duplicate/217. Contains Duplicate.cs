internal class Program
{
    private static void Main(string[] args)
    {
        int[] nums = { 1, 2, 3, 4 };
        containsDuplicate(nums);
    }

    public boolean containsDuplicate(int[] nums)
    {

        Set<Integer> distinct = new HashSet<Integer>();
        foreach (int num in nums)
        {
            if (distinct.contains(num))
            {
                return true;
            }
            distinct.add(num);
        }
        return false;
    }

    private static boolean containsDuplicate1(int[] nums)
    {

        for (int i = 0; i < nums.length; i++)
        {
            for (int j = i + 1; j < nums.length; j++)
            {
                if (nums[i] == nums[j])
                {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean containsDuplicate2(int[] nums)
    {

        Arrays.sort(nums);
        for (int ind = 1; ind < nums.length; ind++)
        {
            if (nums[ind] == nums[ind - 1])
            {
                return true;
            }
        }
        return false;
    }
}