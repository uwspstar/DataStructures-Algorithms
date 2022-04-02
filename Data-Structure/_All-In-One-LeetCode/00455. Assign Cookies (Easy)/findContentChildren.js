const findContentChildren = (kids, cookies) => {
    if (cookies.length === 0) return 0;
    if (kids.length === 0) return 0;

    cookies.sort((a, b) => a - b);
    kids.sort((a, b) => a - b);

    let kid = 0, cookie = 0;
    let res = 0;

    while (kid < kids.length && cookie < cookies.length) {
        if (kids[kid] <= cookies[cookie]) {
            res++;
            kid++;
        }
        cookie++;
    }
    return res;
}