// run code in vscode with command :  dotnet run

using System;

namespace Daily
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr = new int[] { 0, 1, 2, 0, 2, 1, 0 };
            ThreeColor.SortThreeColor(arr);
            System.Console.WriteLine($"arr= {string.Join(", ", arr)}");
        }
    }

    // Day 1 : ThreeColor
    // Two Pointer
    // T: O(N), S:O(1)
    static class ThreeColor
    {
        public static void SortThreeColor(int[] nums)
        {
            var curr = 0; // curr index
            var p0 = 0;
            var p2 = nums.Length - 1;

            while (curr <= p2)
            {
                if (nums[curr] == 0)
                {
                    Swap(nums, curr, p0);
                    p0++;
                    curr++;
                }
                else if (nums[curr] == 2)
                {
                    Swap(nums, curr, p2);
                    p2--;

                }
                else curr++;

            }
        }

        public static void Swap(int[] nums, int indexA, int indexB)
        {
            var temp = nums[indexA];
            nums[indexA] = nums[indexB];
            nums[indexB] = temp;
        }

        // test method
        public static void Display(int[] nums)
        {
            foreach (var n in nums)
            {
                Console.WriteLine($"n= {n}");
            }
        }

    }
}
