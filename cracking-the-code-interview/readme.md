### What's the difference between ASCII and Unicode?
- https://stackoverflow.com/questions/19212306/whats-the-difference-between-ascii-and-unicode
- https://www.youtube.com/watch?v=InpGxlKDMIc
- ASCII defines 128 characters, which map to the numbers 0–127. Unicode defines (less than) 221 characters, which, similarly, map to numbers 0–221 (though not all numbers are currently assigned, and some are reserved).
Unicode is a superset of ASCII, and the numbers 0–127 have the same meaning in ASCII as they have in Unicode. For example, the number 65 means "Latin capital 'A'".
Because Unicode characters don't generally fit into one 8-bit byte, there are numerous ways of storing Unicode characters in byte sequences, such as UTF-32 and UTF-8.
