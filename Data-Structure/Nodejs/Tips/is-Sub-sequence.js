{
    const isSubsequence = (x, y) => {
        let j = 0;

        for (let i = 0; i < y.length() && j < x.length(); i++)
            if (x.charAt(j) == y.charAt(i)){
                j++;
            } 
            
        return j == x.length();
    }
}