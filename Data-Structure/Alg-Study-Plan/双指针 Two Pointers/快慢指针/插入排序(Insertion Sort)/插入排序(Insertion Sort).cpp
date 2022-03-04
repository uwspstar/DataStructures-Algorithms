void insertion_sort(vector<int> &nums, int n) {
    for (int i = 0; i < n; ++i) {
       for (int j = i; j > 0 && nums[j] < nums[j-1]; --j) {
           swap(nums[j], nums[j-1]);
} }
}