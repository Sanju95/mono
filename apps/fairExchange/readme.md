## Thought Process
Given the task's emphasis on UI & UX, I prioritized spending most of my time on these aspects. Unfortunately, due to time constraints, I couldn't complete the algorithm needed to generate the word ladder. To simulate the ladder, I utilized dummy data with a timeout delay. Adhering to the restriction of not using third-party libraries, I opted for the classic combination of HTML, CSS, and JavaScript, aligning with the frontend focus of the role. If React usage were permitted, I would have approached the task differently, employing a more modular React-based solution.

## Approach
    - HTML Structure: Initiated the project by building the HTML structure, encompassing necessary elements.
    - CSS Styling: Applied styles using CSS to enhance the visual appeal and user experience.
    - JavaScript Scripting: Systematically worked through the requirements by adding TODO comments in the JavaScript file.
    - DOM References: Gained references to DOM elements to avoid redundancy in accessing elements throughout the script.
    - Input Event Listener: Implemented an input event listener to monitor user input, dynamically enabling the Solve button upon meeting specified conditions.
    - Debounce Function: Introduced a debounce function to regulate the frequency of input events, preventing excessive calls.
    - ValidateInput Function: Responsible for validating input conditions and enabling/disabling the Solve button accordingly.
    - Validation UI: Incorporated a UI element for a list of validations, providing clear feedback to users on required input.
    - Reset Button: Added a Reset button to clear inputs, enhancing user experience.
    - Modal Display: Integrated a modal for displaying messages, such as when no solution is found, along with a close button.
    - DisplayLadder Function: Manages the display of words and dynamically adds a scrollbar when there are more than 8 words.
    - Clearing the solution when the input is edited while the solution is displayed


## Test
While not explicitly mandated, I recognized the importance of testing. Consequently, I included a test file with relevant test cases to cover various scenarios.

## Future Improvements
With a more time I would focus on the following tasks to complete
    - Complete the algorithm for word ladder generation.
    - Explore an API for fetching or define a comprehensive list of words.
    - Implement a timer for displaying the spinner after a delay, rather than using a fixed timeout.
    - Develop unit tests to thoroughly cover possible test cases and ensure robustness.
