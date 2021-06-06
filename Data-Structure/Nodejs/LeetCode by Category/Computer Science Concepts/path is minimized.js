//dynamic programming
/*
23 32 62 20 77 42 31
15 14 10 11 48 32 30
14 46 71 31 53 07 82
20 12 78 78 46 24 43
37 16 12 99 15 97 85
13 29 82 71 63 27 75
44 81 80 48 02 45 17
*/
//Consider the square grid above. Suppose a person wants to move from the top left corner towards the bottom right corner. To move, a person can go down or right. Let SS be the path traversed such that the sum of the cells in the path is minimized. What is the value of SS?
//
//min(x,y)=grid(x,y)+min(min(x+1,y),min(x,y+1))