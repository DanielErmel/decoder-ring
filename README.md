# Decoder-ring

16.2 Project for Thinkful.

## Summary

This Decoder Ring project was created to "test your ability to build tricky algorithms as well as write unit tests with Mocha and Chai."
Three functions were to be created, each representing a different cipher: Caesar, Polybius and Substitution.

---

### Caesar Cipher

This cipher is a monoalphabetic cipher, where each letter is replaced by another letter in the alphabet. This letter is determined using a number to shift one way or another. For example: caesar("thinkful", 3) would result in "wklqnixo". Each of these letters is shifted to the right in the alphabet 3 places.
The function has three parameters:
> - **input** represents what word is to be encoded or decoded.
> - **shift** represents the distance left or right the letters are to be shifted.
> - **encode** (true by default) is whether or not the phrase is to be encoded or decoded.

There were rules to set boundaries for:
> - The shift value must be present, and must be between -25 and 25 (equal to 0 would also be unaccepted as that would result in no shift at all).
> - Spaces and non-letter symbols were to remain the same.
> - Capital letters were to be treated as lowercase.
> - Letters should wrap around if they pass the end of the alphabet ("a", -4) would become "w".

---

### Polybius Cipher

This cipher was developed in ancient Greece by reducing letters of the alphabet to simple pairs of numbers. It has a 5x5 grid, with each letter being represented by a two digit number. As english has 26 letters, 'i' and 'j' share a square.

|       |     | 1   | 2   | 3   | 4   | 5   | 6   |
| ----- | --- | --- | --- | --- | --- | --- | --- |
| **1** | -   | A   | B   | C   | D   | E   | --- |
| **2** | -   | F   | G   | H   | I/J | K   | --- |
| **3** | -   | L   | M   | N   | O   | P   | --- |
| **4** | -   | Q   | R   | S   | T   | U   | --- |
| **5** | -   | V   | W   | X   | Y   | Z   | " " |

The grid is then treated like Battleship, only the top number is followed by the side number. So "S" would be represented by "34" (3 across, 4 down).

When encoding, the parameter is a string: polybius("daniel") and the result is a number "411133425113". 
Inversely, when decoding, the parameter is a number "411133425113" and the result is a string "daniel".

If the length of the number while decoding is odd, the test results in false, as an odd number would not pair down evenly. 

If a space occurs in either encryption or decryption, it is translated as '65' and returned as a space. "hi there" becomes "3242 4432512451".

---

### Substitution Cipher

A substitution cipher is almost identitcal to a caesar cipher, but with a predetermined shift rather than a directional shift. One of the parameters is 'alphabet' which is represented by a unique, 26-character list. Any symbol, letter or number can be within this list, and it is replaced 1:1 based on the index of a typical english alphabet.

This is the sort of cipher most often found in puzzle books. Utilizing knowledge of frequency of words/letters in the english language, in order to decipher this by hand, trial and error is used. 

Again, the function is designed to incorporate both encryption and decryption in its parameters. Examples given in the project's instructions:

```javascript
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
```
