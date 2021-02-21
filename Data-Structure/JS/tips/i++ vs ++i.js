// https://www.youtube.com/watch?v=lrtcfgbUXm4

{
    let i = 1;
    let j = i++;
    console.log("j=i++", j, "i=", i)
}
{
    let i = 1;
    let j = ++i;
    console.log("j=++i, j=", j, "i=", i)
}
{
    let i = 1;
    let j = i + 1;
    console.log("j=i+1, j=", j, "i=", i);
}
{
    for (let i = 0; i < 10; i++) {
        let j = i;
        console.log('i=', i, 'j=', j);
    }
}