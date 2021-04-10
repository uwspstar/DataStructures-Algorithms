{
    const NumberOf1 = (n) => {
        let count = 0;
        while (n) {
            ++ count;
            console.log('n-1=', n-1, 'n=', n)
            n = (n - 1) & n;
            console.log('after n=', n)
        } 
        return count;
    } 

    console.log(NumberOf1(15))

}