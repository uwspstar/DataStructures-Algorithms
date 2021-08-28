{
    const countOnes = a => {
        count = 0;
        while (a) {
            a = a & (a - 1);
            count++;
        }
        return count;
    }
}