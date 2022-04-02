//273. Integer to English Words
/*
Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/
var numberToWords = function (num) {
    if (num === 0) return 'Zero'

    let billion = Math.floor(num / 1e9)
    let million = Math.floor(num / 1e6) % 1e3
    let thousand = Math.floor(num / 1e3) % 1e3
    let hundred = Math.floor(num / 100) % 10
    let ten = Math.floor(num / 10) % 10
    let one = num % 10

    let Tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    let Teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    let ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

    let res = ''
    if (billion) res += numberToWords(billion) + ' Billion'
    if (million) res += ' ' + numberToWords(million) + ' Million'
    if (thousand) res += ' ' + numberToWords(thousand) + ' Thousand'
    if (hundred) res += ' ' + ones[hundred] + ' Hundred'
    if (ten > 1) {
        res += ' ' + Tens[ten]
        if (one) res += ' ' + ones[one]
    } else if (ten === 1) {
        res += ' ' + Teens[one]
    } else if (one > 0) {
        res += ' ' + ones[one]
    }
    return res.trim()
};