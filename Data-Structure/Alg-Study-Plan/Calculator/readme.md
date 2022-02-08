---
marp: true
theme: default
size: 16:9
---

# 计算器

- https://docs.google.com/presentation/d/14_odc4U55eySKCjL6xRLU8j4IcDYnh77CIDGroNuv-0/edit#slide=id.ga354aae382_0_2
- https://labuladong.gitee.io/algo/4/32/137/
---
# Summary
- calculator use stack to deal with operator +-*/
- calculator use recursive to deal with ‘(‘ ‘)’
- spaces can be emit with string.replaceAll(“ “, “”); or just ignore it outside of “if”
- java can use Character.isDigit() or ‘0’ <= char <= ‘9’ to check if it’s a number
- stack sum can use Java8 stream() or normal for loop
- recommend to use stack & recursive together, template:
--- 
# How to check if it is a number?
- char > ‘0’ due to +-*/ all has smaller ascii code
- ‘0’ <= char && char <= ‘9’ 
- Character.isDigit()

---
- 字符串转整数
- 处理加减法
