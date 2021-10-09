//- 507. Perfect Number https://leetcode.com/problems/perfect-number/
//- 290. Word Pattern https://leetcode.com/problems/word-pattern/


using System;
using System.Collections.Generic;

namespace Day2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(PerfectNumber.CheckPerfectNumber(1));
            Console.WriteLine(PerfectNumber.CheckPerfectNumber(28));

            Console.WriteLine(WordPattern.CheckWordPattern("abba", "dog cat cat dog"));
            Console.WriteLine(WordPattern.CheckWordPattern("abba", "dog cat cat fish"));
        }
    }

    /*
    290. Word Pattern https://leetcode.com/problems/word-pattern/

    Given a pattern and a string s, find if s follows the same pattern.
    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
  
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true*/
    public static class WordPattern
    {
        // T : O(m) m is the length of patten
        // S : O(m) m is the length of patten
        public static bool CheckWordPattern(string p, string s)
        {
            var arrS = s.Split();
            var pMapS = new Dictionary<string, string>();
            var sMapP = new Dictionary<string, string>();

            if (p.Length != arrS.Length) return false;

            for (var i = 0; i < p.Length; i++)
            {
                var x = p[i].ToString();
                var y = arrS[i].ToString();

                string xValue;
                string yValue;

                if (pMapS.TryGetValue(x, out xValue) && pMapS[x] != y) return false;
                if (sMapP.TryGetValue(y, out yValue) && sMapP[y] != x) return false;

                pMapS[x] = y;
                sMapP[y] = x;
            }

            return true;
        }
    }


    /*
    507. Perfect Number https://leetcode.com/problems/perfect-number/

    A Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

    For instance,
    28 = 1 + 2 + 4 + 7 + 14
    */
    public static class PerfectNumber
    {
        //T: O( n Square Root), S: O(1);
        //only check half of nums
        public static bool CheckPerfectNumber(int num)

        {
            // i * i = num
            if (num <= 0) return false;
            var sum = 0;
            for (var i = 1; i * i < num; i++)
            {
                if (num % i == 0)
                {
                    sum += i;
                    if (i * i < num)
                    {
                        sum += num / i;
                    }
                }
            }
            return num == sum - num; // only check half
        }

        // T: O(N), S: O(1)
        // will reach the time limit with huge number
        public static bool BruteForceCheckPerfectNumber(int num)
        {
            var sum = 0;
            for (var i = 1; i < num; i++)
            {
                if (num % i == 0)
                {
                    sum += i;
                }
            }
            return num == sum;
        }
    }
}
