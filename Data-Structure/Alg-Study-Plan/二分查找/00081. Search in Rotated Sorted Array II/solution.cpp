bool search(vector<int> &nums, int target)
{
    int l = 0, r = nums.size() - 1;
    while (l <= r)
    {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target)
        {
            return true;
        }
        if (nums[l] == nums[mid])
        { // 无法判断哪个区间是增序的 ++l;
        }
        else if (nums[mid] <= nums[r])
        {
            // 右区间是增序的
            if (target > nums[mid] && target <= nums[r])
            {
                l = mid + 1;
            }
            else
            {
                r = mid - 1;
            }
        }
    }
}
else
{
    // 左区间是增序的
    if (target >= nums[l] && target < nums[mid])
    {
        r = mid - 1;
    }
    else
    {
        l = mid + 1;
    }
    return false;
}