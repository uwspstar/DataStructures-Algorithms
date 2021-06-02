{
    //t : O(2^(m + n))
    //s : O(m + n)
    const gridTraveler = (m, n, memo = {}) => {
        const key = m + ',' + 'n';
        if (key in memo) return memo[key];
        if (m === 1 && n === 1) return 1;
        if (m === 0 || n === 0) return 0;
        return memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    }
    console.log(gridTraveler(1, 3)); //1
    console.log(gridTraveler(2, 3)); //3
    console.log(gridTraveler(3, 3)); //6
    console.log(gridTraveler(18, 18)); //6
}
{
    //t : O(2^(m + n))
    //s : O(m + n)
    const gridTraveler = (m, n) => {
        if (m === 1 && n === 1) return 1;
        if (m === 0 || n === 0) return 0;
        return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
    }
    console.log(gridTraveler(1, 3)); //1
    console.log(gridTraveler(2, 3)); //3
    console.log(gridTraveler(3, 3)); //6
}