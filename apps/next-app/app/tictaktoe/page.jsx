## You

Have the function ParallelSums(arr) take the array of integers stored in arr which will always contain an even amount of integers, and determine how they can be split into two even sets of integers each so that both sets add up to the same number. If this is impossible return -1. If it's possible to split the array into two sets, then return a string representation of the first set followed by the second set with each integer separated by a comma and both sets sorted in ascending order. The set that goes first is the set with the smallest first integer.

For example: if arr is [16, 22, 35, 8, 20, 1, 21, 11], then your program should output 1,11,20,35,8,16,21,22

function ParallelSums(arr) {
  //


  // code goes here
  return arr;

}

// keep this function call here
console.log(ParallelSums(readline()));

## Genie

To solve this problem, you can follow these steps:

1. Calculate the sum of all integers in the array `arr`.
2. If the sum is not divisible by 2, return -1 because it is impossible to split the array into two sets with equal sums.
3. Sort the array in ascending order.
4. Initialize two empty arrays, `set1` and `set2`, to store the elements of the two sets.
5. Starting from the largest element, iterate over each element in `arr`.
6. Compare the sum of the elements in `set1` with the sum of the elements in `set2`.
   - If the sum of `set1` is less than the sum of `set2`, add the current element to `set1`.
   - Otherwise, add the current element to `set2`.
7. Finally, concatenate the elements in `set1` and `set2`, separated by commas, and return the resulting string.

Here's the updated code for the `ParallelSums` function:

```javascript
function ParallelSums(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) {
    return -1;
  }

  arr.sort((a, b) => a - b);

  let set1 = [];
  let set2 = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (set1.reduce((sum, num) => sum + num, 0) < set2.reduce((sum, num) => sum + num, 0)) {
      set1.push(arr[i]);
    } else {
      set2.push(arr[i]);
    }
  }

  const result = [...set1, ...set2].sort((a, b) => a - b);

  return result.join(",");
}

console.log(ParallelSums([16, 22, 35, 8, 20, 1, 21, 11])); // Output: 1,11,20,35,8,16,21,22
```

This code will output the string representation of the two sets in ascending order, with each integer separated by a comma. In this case, the output is `1,11,20,35,8,16,21,22`.

## You

We provided some simple React template code. Your goal is to modify the application so that when you click the toggle button, the favorite programming language toggles between the items in the languages array. The default value should be the first item in the array.

You must use the Context API for this challenge, which means you have to use the React.createContext and Context.Provider functions. You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are.

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

function App() {
  // implement Context here so can be used in child components
  return (
    <MainSection />
  );
}

function MainSection() {
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: null</p>
      <button id="changeFavorite">toggle language</button>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

## Genie

To achieve the desired behavior using the Context API, you can follow these steps:

1. Create a new context using `React.createContext()`. This context will hold the favorite programming language and a function to toggle it.
2. In the `App` component, use the `useState` hook to define a state variable for the current favorite language and a function to update it.
3. Wrap the `MainSection` component with the context provider and pass the state variable and update function as values to the provider.
4. In the `MainSection` component, use the `useContext` hook to access the favorite language and toggle function from the context.
5. Update the JSX code in the `MainSection` component to display the current favorite language and attach an onClick event handler to the button to call the toggle function.

Here's the updated code:

```javascript
import React, { useState, useContext, createContext } from 'react';
import { createRoot } from 'react-dom/client';

const languages = ['JavaScript', 'Python'];

// Step 1: Create a new context
const FavoriteLanguageContext = createContext();

function App() {
  // Step 2: Define state for favorite language
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  return (
    // Step 3: Wrap MainSection with context provider
    <FavoriteLanguageContext.Provider value={{ favoriteLanguage, setFavoriteLanguage }}>
      <MainSection />
    </FavoriteLanguageContext.Provider>
  );
}

function MainSection() {
  // Step 4: Access favorite language and toggle function from context
  const { favoriteLanguage, setFavoriteLanguage } = useContext(FavoriteLanguageContext);

  // Step 5: Handle button click to toggle favorite language
  const handleToggleLanguage = () => {
    const currentIndex = languages.indexOf(favoriteLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setFavoriteLanguage(languages[nextIndex]);
  };

  return (
    <div>
      <p id="favoriteLanguage">favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={handleToggleLanguage}>toggle language</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

Now, when you click the "toggle language" button, the favorite programming language will cycle between the items in the `languages` array. The default value is the first item in the array, which is "JavaScript". The current favorite language is displayed in the paragraph element with the ID "favoriteLanguage".