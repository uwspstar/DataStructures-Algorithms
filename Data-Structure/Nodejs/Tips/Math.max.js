{
    let arr = [3, 2, 1, 6, 0, 5]

    console.log('maxVal =', Math.max(...arr))
    console.log('maxValIndex =', arr.indexOf(Math.max(...arr)))

    let set = new Set(arr) // cannot use let set = new Set(...arr)
    console.log('set maxVal =', Math.max(...set))
    console.log('set maxValIndex =', arr.indexOf(Math.max(...set)))
}