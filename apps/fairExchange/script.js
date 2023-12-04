// Variable to track if a solution is currently being calculated
let solving = false;

// References to DOM elements
const txtWord1 = document.getElementById('txtword1');
const txtWord2 = document.getElementById('txtword2');
const btnSolve = document.getElementById('btnSolve');
const validationList = document.getElementById('validationList');
const ladderContainer = document.getElementById('ladder');
const spinner = document.getElementById('spinner');
const btnReset = document.getElementById('btnReset');

// Debounce function to limit the frequency of input events
txtWord1.addEventListener('input', debounce(validateInput, 300));
txtWord2.addEventListener('input', debounce(validateInput, 300));

function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

// Function to validate input and enable/disable the solve button
function validateInput() {
  clearSolution();
  const word1 = txtWord1.value;
  const word2 = txtWord2.value;

  // Clear previous validation messages
  validationList.innerHTML = '';

  // Check if only alphabets are entered
  const isValidInput = /^[A-Za-z]+$/.test(word1) && /^[A-Za-z]+$/.test(word2);

  // Update validation messages
  updateValidationMessage(word1, 'Word 1');
  updateValidationMessage(word2, 'Word 2');
  validateWordsEquality(word1, word2);
    validateAlphabets(isValidInput);
    validateSameWord(word1, word2);

  // Enable/disable solve button
  btnSolve.disabled = !(
    word1 &&
    word2 &&
    word1.length === word2.length &&
    word1 !== word2 &&
    isValidInput
  );
}

// Function to update validation messages
function updateValidationMessage(word, label) {
  if (!word) {
    validationList.innerHTML += `<li style='color: red;'>✗ ${label} is required</li>`;
  } else {
    validationList.innerHTML += `<li style='color: green;'>✓ ${label} is required</li>`;
  }
}

// Function to validate equality of word lengths
function validateWordsEquality(word1, word2) {
  if (word1.length !== word2.length) {
    validationList.innerHTML +=
      "<li style='color: red;'>✗ Words must be of equal length</li>";
  } else {
    validationList.innerHTML +=
      "<li style='color: green;'>✓ Words are of equal length</li>";
  }
}

// Function to validate that only alphabets are entered
function validateAlphabets(isValidInput) {
  if (!isValidInput) {
    validationList.innerHTML +=
      "<li style='color: red;'>✗ Only alphabets are allowed</li>";
  } else {
    validationList.innerHTML +=
      "<li style='color: green;'>✓ Input is valid</li>";
  }
}

// Function to validate if both words are the same
function validateSameWord(word1, word2) {
  if (word1 === word2) {
    validationList.innerHTML +=
      "<li style='color: red;'>✗ Words must be different</li>";
  } else {
    validationList.innerHTML +=
      "<li style='color: green;'>✓ Words are different</li>";
  }
}

// Function to clear the solution
function clearSolution() {
  // Check if there is already a solution displayed
  if (ladderContainer.children.length > 0) {
    ladderContainer.innerHTML = '';
  }
}

// Function to clear the validation messages
function clearValidation() {
  validationList.innerHTML = '';
}

// Function to initiate the word ladder solving process
function solve() {
  clearValidation();
  if (solving) return;

  const word1 = txtWord1.value;
  const word2 = txtWord2.value;

  // Check if the input conditions are met
  if (!word1 || !word2 || word1.length !== word2.length || word1 === word2) {
    showModal('Invalid input');
    return;
  }

  solving = true;
  spinner.style.display = 'block';

  // Simulating a delay for demonstration purposes
  setTimeout(() => {
      const ladder = generateWordLadder(word1, word2);

      if (ladder && ladder.length > 0) {
          displayLadder(ladder);
      } else {
          showModal("Sorry, No solution can be found for the given words.");
      }
    spinner.style.display = 'none';
    solving = false;
  }, 500);

  // Disable the solve button so it cannot be pressed again with the same word choice
  btnSolve.disabled = true;
}

// Function to implement the word ladder generation logic
function generateWordLadder(word1, word2) {
    // Example ladder for demonstration purposes

    const ladder = [
    'CLASS',
    'CLANS',
    'CLANK',
    'BLANK',
    'BLINK',
    'BRINK',
    'BRING',
    'BRIAN',
    'BRAIN',]
  return ladder || [];
}

// Function to display the word ladder
function displayLadder(ladder) {
  ladder.forEach((word) => {
    const li = document.createElement('li');
    li.textContent = word;
    li.classList.add('ladder-item');
    ladderContainer.appendChild(li);
  });

  // Add scroll class if the ladder is longer than 8 words
    if (ladder.length > 8) ladderContainer.classList.add('scroll');

    // Show the reset button only when a solution is displayed
    if (ladder.length > 0) {
        showbtnReset();
    }
}

// Function to display a modal with a given message
function showModal(message) {
  document.getElementById('modalMessage').textContent = message;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('modalMessage').textContent = '';
  document.getElementById('modal').style.display = 'none';
}

// Function to reset all inputs and clear the ladder
function reset() {
    txtWord1.value = "";
    txtWord2.value = "";
    clearSolution();
    clearValidation();
    btnSolve.disabled = true;
    btnReset.style.display = 'none';
}

// Function to display the reset button
function showbtnReset() {
    btnReset.style.display = 'inline-block';
}

// Function to hide the reset button
function hidebtnReset() {
    btnReset.style.display = 'none';
}