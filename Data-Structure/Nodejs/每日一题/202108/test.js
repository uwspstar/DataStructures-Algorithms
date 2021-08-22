var combine = function (n, k) {
    let res = [];
    let path = [];
 
    const backTracking = (n, k, idx) => {
        
        if (path.length === k) {
            res.push([...path]);
            console.log('....res=', res);
            return;
        }
        // i <= n - (k - path.length) + 1;
        for (let i = idx; i <= n; i++) {
            path.push(i);
            console.log('i=', i,'backTracking (idx=', idx,')','path=',path, 'path.push(',i,')');
            backTracking(n, k, i + 1);
            path.pop(i);
            console.log('backTracking (idx=', idx,')', 'path=',path,'path.pop(',i,')');
        }
 
    }
 
    backTracking(n, k, 1);
 
    return res;
 };

 console.log(combine(3, 2));
 