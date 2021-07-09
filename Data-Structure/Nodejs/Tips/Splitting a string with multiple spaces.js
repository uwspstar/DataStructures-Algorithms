//Splitting a string with multiple spaces
//https://stackoverflow.com/questions/7081958/splitting-by-white-space-or-multiple-white-spaces
{
    s.split(' ').filter(x => x !== '');
    s.split(/\s+/);

    var reverseWords = function (s) {
        return s.trim().split(/\s+/).reverse().join(' ');
    };
}