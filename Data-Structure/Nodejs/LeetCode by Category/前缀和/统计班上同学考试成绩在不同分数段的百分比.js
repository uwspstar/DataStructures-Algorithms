//统计班上同学考试成绩在不同分数段的百分比，也可以利用前缀和技巧
//给你任何一个分数段，你都能通过前缀和相减快速计算出这个分数段的人数，百分比也就很容易计算了。
{
    let scores = [10, 20, 80, 90, 99, 100, 10, 20, 80, 90, 99, 100, 2]; // 存储着所有同学的分数
    let count = new Array(101).fill(0); //score 0 ~ 100
    for (let s of scores) {
        count[s]++;
    }
    console.log('build count=', JSON.stringify(count));
    // 构造前缀和
    for (let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i - 1];
    }
    console.log('count=', JSON.stringify(count));
}