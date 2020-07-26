// 1 :
return typeof (str) == 'string' ? 'string' : 'not a string';

// 2 :
0 ? console.log('true') : console.log('false'); //false
1 ? console.log('true') : console.log('false'); //true

// 3: if else if 
let num;
let numString = (
    num === 1 ? 'one' : (
        num === 2 ? 'two' : (
            num === 3 ? 'three' : (
                num === 4 ? 'four' : (
                    num === 5 ? 'five' : (
                        num === 6 ? 'six' : (
                            num === 7 ? 'seven' : (
                                num === 8 ? 'eight' : (
                                    num === 9 ? 'nine' :
                                        'zero'
                                )))))))));