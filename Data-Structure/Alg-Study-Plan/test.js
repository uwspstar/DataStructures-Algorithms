//console.log("hi")
/*
INPUT:
Line 1: An integer N for the number of actions.
Next N lines: A unique action to perform.
Next line: An integer nbOrders for the numbers of precedence.
Next nbOrders lines: a line in the form a1 precedence a2, where precedence is either before if action a1 must be done before action a2, or after if action a1 must be done after action a2.

OUTPUT:
One action per line in chronological order.
If multiple actions can be done at the same time, choose the one that appears first in the intitial order.

CONSTRAINTS:
1 < N < 10

EXAMPLE:
Input
3
Close
Open
Pour
2
Open before Pour
Close after Pour
Output
Open
Pour
Close
*/
const test = arr => {

 // console.log('arr=', arr);
 // 
 let res = new Map();
 for (let a of arr) {
     res.set(a,[]); // res= [ 'Close', 'Open', 'Pour' ]
 }
 // 1) 'Open'< 'Pour'
 if ('Open before Pour' === 'Open before Pour') {
     res.set('Open', ['Pour'])
 }
 // 2) Close after Pour
 if ('Close after Pour' === 'Close after Pour') {
    res.set('Pour', ['Close'])
 }
  
  
  
  console.log('res=', res);

}

console.log(test(['Close','Open','Pour']))