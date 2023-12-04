/*
TODO: Write tests for the following scenarios:
1. Valid Input:
Input: "CAT", "DOG"
Expected Output: A word ladder should be generated successfully.

2. Invalid Input - Same Word:
Input: "CAT", "CAT"
Expected Output: The "solve" button should be disabled, Invalid input message should be displayed.

3. Invalid Input - Different Lengths:
Input: "CAT", "BATS"
Expected Output: The "solve" button should be disabled, Invalid input message should be displayed.

4. Invalid Input - Special Characters & Numbers & Spaces:
Input: "CAT!", "@DOG"
Expected Output: The "solve" button should be disabled, Invalid input message should be displayed.

5. Empty Input:
Input: Leave one or both input fields empty and attempt to solve.
Expected Output: The "solve" button should be disabled, and validation messages for required fields should be displayed.

6. Solution Longer than 8 Words:
Input: "SMART", "MONEY"
Expected Output: A word ladder longer than 8 words should be displayed, and the ladder should be scrollable.

7. Reset Button Visibility:
Input: Solve a word ladder, then click the reset button.
Expected Output: All inputs should be cleared, the ladder should be removed, and the reset button should be hidden.

8. Multiple Attempts with the Same Words:
Input: Solve a word ladder, then attempt to solve again with the same words.
Expected Output: The "solve" button should be disabled after the first attempt.

9. No solution found:
Input: "x", "y"
Expected Output: Modal should be displayed indicating that no solution was found.

*/