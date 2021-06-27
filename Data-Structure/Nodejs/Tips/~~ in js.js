//https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript
~(5.5)   // => -6
~(-6)    // => 5
~~5.5    // => 5  (same as Math.floor(5.5))
~~(-5.5) // => -5 (NOT the same as Math.floor(-5.5), which would give -6 )