/*
A UTF-8 character encoding is a variable width character encoding that can vary from 1 to 4 bytes depending on the character. The structure of the encoding is as follows:
1 byte:  0xxxxxxx
2 bytes: 110xxxxx 10xxxxxx
3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
For more information, you can read up on the Wikipedia Page.

Given a list of integers where each integer represents 1 byte, return whether or not the list of integers is a valid UTF-8 encoding.

This problem can be solved by applying a ruleset to the input. Here's one of the ways we can list out the rules for the character encoding:

1. Make sure the length of the list is between 1 to 4

2. Depending on the length of the list, we check:
- If the length of the list is 1, then the first bit of the first byte should be 0.
- If the length of the list is 2, then the first three bits of the first byte should be 110.
- If the length of the list is 3, then the first four bits of the first byte should be 1110.
- If the length of the list is 4, then the first five bits of the first byte should be 1110.

Then for all following bytes, they should all start with the bits 10.

Using a bitmask, we can determine what the first couple bits are and compare to what we expect. Here's how a solution would look like:

BYTE_MASKS = [
    None,
    0b10000000,
    0b11100000,
    0b11110000,
    0b11111000,
]
BYTE_EQUAL = [
    None,
    0b00000000,
    0b11000000,
    0b11100000,
    0b11110000,
]

def utf8_validator(bytes):
  bytes_len = len(bytes)
  if bytes_len == 0 or bytes_len > 4:
    return False
  if bytes[0] & BYTE_MASKS[bytes_len] != BYTE_EQUAL[bytes_len]:
    return False
  for b in bytes[1:]:
    if b & 0b11000000 != 0b10000000:
      return False
  return True

print utf8_validator([0b00000000])
# True
print utf8_validator([0b00000000, 10000000])
# False
print utf8_validator([0b11000000, 10000000])
# True

The time complexity of the solution is O(1) since the solution only checks 4 bytes.




*/
const utf8Validator = (arr) => {

}

console.log('utf8Validator', utf8Validator([0b00000000])); // True
console.log('utf8Validator', utf8Validator([0b00000000, 10000000]));// False
console.log('utf8Validator', utf8Validator([0b11000000, 10000000])); // True