//566. Reshape the Matrix
{
  const matrixReshape = (mat, r, c) => {
    let m = mat.length;
    let n = mat[0].length;
    let arr = [];

    if (r * c != m * n) {
      return mat;
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        arr.push(mat[i][j]);
      }
    }

    let res = [];
    while (arr.length) {
      res.push(arr.splice(0, c));
    }

    return res;

  };
}