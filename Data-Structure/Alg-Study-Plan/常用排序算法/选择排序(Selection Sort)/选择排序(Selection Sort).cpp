void selection_sort(vector<int> &nums, int n)
{
    int mid;
    for (int i = 0; i < n - 1; ++i)
    {
        mid = i;
        for (int j = i + 1; j < n; ++j)
        {
            if (nums[j] < nums[mid])
            {
                mid = j;
            }
        }
        swap(nums[mid], nums[i]);
    }
}