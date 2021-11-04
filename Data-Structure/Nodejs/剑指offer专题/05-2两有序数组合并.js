{
    const merge = (A1, A2) => {
        if (A1.length === 0) return A2;
        if (A2.length === 0) return A1;
        if (A1.length < A2) return merge(A2, A1);

        let N1 = A1.length;
        let N2 = A2.length;
        for (let i = 0; i < N2; i++) {
            A1.push('');
        }
        
        let p1 = N1 - 1;
        let p2 = N2 - 1;
        let i = A1.length - 1;

        while (p1 >= 0 && p2 >= 0) {
            if (A1[p1] > A2[p2]) {
                A1[i] = A1[p1]
                p1--;
                i--;
            } else {
                A1[i] = A2[p2]
                p2--;
                i--;
            }
        }

        while (p1 >= 0) { // >=
            A1[i] = A1[p1]
            p1--;
            i--;
        }

        while (p2 >= 0) {
            A1[i] = A2[p2]
            p2--;
            i--;
        }
        
        return A1;

    }

    console.log('A1 =', merge([2, 4, 6, 8], []));
    console.log('A1 =', merge([], [1, 3]));
    console.log('A1 =', merge([2, 4, 6, 8], [1, 3]));
    console.log('A1 =', merge([2, 4, 6, 8], [1, 3, 5, 7, 9]));
}