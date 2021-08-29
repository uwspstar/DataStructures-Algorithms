//118. Pascal's Triangle
{
    var generate = function (numRows) {
        if (numRows === 1) return [[1]];

        let res = [[1], [1, 1]];

        for (let i = 2; i < numRows; i++) {
            res[i] = [];
            res[i].push(1);

            let tmp = res[i - 1];

            for (let j = 1; j < tmp.length; j++) {
                let sum = tmp[j] + tmp[j - 1];
                res[i].push(sum);
            }

            res[i].push(1);
        }

        return res;
    };
    //Remove Sub-Folders from the Filesystem
    //Divide Array in Sets of K Consecutive Numbers
    //Sort Array by Increasing Frequency

    console.log(generate(5));//[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
}