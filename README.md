# noobLibJS
a collection of interesting javascript functions, that may or may not be useful, that I have come across in my learning journey

## Testing Issue
on occasion running unit tests, will fail the first run, however running them again with no changes pass. The culprit seems to be `expect(deciCount(result)).toBe(deciCount(max));` in the random.test, when modifications have been made to deciCount function This is rare and unusual, and I cant pinpoint the cause. My suspision is it has to do with the fact that the test run in parrallel and as `random()` function utilizes the `deciCount()` function, perhaps testing bothe functions in parralele causes some sort of a glitch, this does not explain why only the first run fails. It could also be some sort of enviroment setting in jest, meaning running test shortly after changes doesnt allow for proper settings?!.. these are all just guesses. for now, I will run 3 tests without changes, and if only the first fails, i will consider it a pass.

FAIL  unit_tests/random.test.js
  ● random function › returns a number with the same number of decimal places as the range

    expect(received).toBe(expected) // Object.is equality

    Expected: 4
    Received: 3

      67 |         const max = 10.1234;
      68 |         const result = random(min, max);
    > 69 |         expect(deciCount(result)).toBe(deciCount(max));
         |                                   ^
      70 |     });
      71 | });

      at Object.toBe (unit_tests/random.test.js:69:35)