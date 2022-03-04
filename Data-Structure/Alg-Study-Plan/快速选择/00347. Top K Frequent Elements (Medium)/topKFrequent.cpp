/*
桶排序的意思是为每个值设立一个桶，桶内记录这个值出现的次数(或其它属 性)，然后对桶进行排序。针对样例来说，我们先通过桶排序得到四个桶 [1,2,3,4]，它们的值分别 为 [4,2,1,1]，表示每个数字出现的次数。

紧接着，我们对桶的频次进行排序，前 k 大个桶即是前 k 个频繁的数。这里我们可以使用各种 排序算法，甚至可以再进行一次桶排序，把每个旧桶根据频次放在不同的新桶内。针对样例来说， 因为目前最大的频次是 4，我们建立 [1,2,3,4] 四个新桶，它们分别放入的旧桶为 [[3,4],[2],[],[1]]， 表示不同数字出现的频率。最后，我们从后往前遍历，直到找到 k 个旧桶。
*/
vector<int> topKFrequent(vector<int> &nums, int k)
{
    unordered_map<int, int> counts;
    int max_count = 0;
    for (const int &num : nums)
    {
        max_count = max(max_count, ++counts[num]);
    }
    vector<vector<int> > buckets(max_count + 1);
    for (const auto &p : counts)
    {
        buckets[p.second].push_back(p.first);
    }
    vector<int> ans;
    for (int i = max_count; i >= 0 && ans.size() < k; --i)
    {
        for (const int &num : buckets[i])
        {
            ans.push_back(num);
            if (ans.size() == k)
            {
                break;
            }
        }
    }
    return ans;
}