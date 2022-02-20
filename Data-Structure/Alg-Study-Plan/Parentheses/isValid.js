/*
假设字符串中只有圆括号，如果想让括号字符串合法，那么必须做到：
每个右括号 ) 的左边必须有一个左括号 ( 和它匹配。
比如说字符串 ()))(( 中，中间的两个右括号左边就没有左括号匹配，所以这个括号组合是不合法的。
那么根据这个思路，我们可以写出算法：

bool isValid(string str) {
    // 待匹配的左括号数量
    int left = 0;
    for (int i = 0; i < str.size(); i++) {
        if (s[i] == '(') {
            left++;
        } else {
            // 遇到右括号
            left--;
        }

        // 右括号太多
        if (left == -1)
            return false;
    }
    // 是否所有的左括号都被匹配了
    return left == 0;
}
*/
const isValid = str => {
    if (str.length === 0) return true;
    if (str.length === 1) return false;

    let left = 0;
    for (let s of str ) {
        if (s === '(') left++;
        else left--;
        if (left === -1) return false;
    }
    return left === 0;
}
