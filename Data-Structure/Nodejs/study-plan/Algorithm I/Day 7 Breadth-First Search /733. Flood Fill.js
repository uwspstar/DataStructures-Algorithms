//733. Flood Fill
//https://leetcode.com/problems/flood-fill/
{
    var floodFill = function (image, sr, sc, newColor) {

        const dfs = (image, sr, sc, newColor, oldColor) => {

            if (sr < 0 || sc >= image[0].length) return;
            if (sc < 0 || sr >= image.length) return;
            if (image[sr][sc] != oldColor) return;
            if (newColor == oldColor) return;

            image[sr][sc] = newColor;

            dfs(image, sr - 1, sc, newColor, oldColor);
            dfs(image, sr + 1, sc, newColor, oldColor);
            dfs(image, sr, sc - 1, newColor, oldColor);
            dfs(image, sr, sc + 1, newColor, oldColor);
        }

        dfs(image, sr, sc, newColor, image[sr][sc])

        return image;
    };
}