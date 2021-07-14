{
    res += String(s).repeat(n);
}
{
    'abc'.repeat(-1)    // RangeError
    'abc'.repeat(0)     // ''
    'abc'.repeat(1)     // 'abc'
    'abc'.repeat(2)     // 'abcabc'
    'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
    'abc'.repeat(1 / 0)   // RangeError

        ({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
    // 'abcabc' (repeat() is a generic method)
}