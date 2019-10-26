//total number of matching pairs

function sockMerchant(n, ar) {
 
  if (n < 2) return 0;
  let map = {};
  for(let i = 0; i < n; i++) {
      if(map[ar[i]]) {
          map[ar[i]]++;
      } else {
          map[ar[i]] = 1;
      }
  }
  let count = 0;
  for (let x in map) {
      count += Math.floor(map[x] / 2);
  }
  return count;
}
