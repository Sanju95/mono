# Exercise 10: ROT Cipher

## Part 1

Write a function called `rotate10` that will take any lowercase string, and rotate any alphabetical letters to the 10th letter after it in the alphabet.

Example:

```js
rotate10('abcd'); // 'klmn'
rotate10("zoological"); // jyyvyqsmkv
```

# Part 2
Make this function generic so that the number of letters to rotate to is configurable as a function parameter. Assume this parameter has a maximum value of 26.

```js
rotate(10)('abcd'); // 'klmn'
rotate(11)('abcd'); // 'lmno'
```

# Part 3
Create a decoder function that will decode any output of `rotate10()` back to the original

# Part 4
Test that the solution can handle spaces

```js
rotate(13)("onpba vcfhz qbybe nzrg ghexrl unz cvpnaun xvryonfn") // "bacon ipsum dolor amet turkey ham picanha kielbasa"
```


# Exercise 1

### Part 1

Write a React component which accepts 3 props:

    1. loadMetadata - A function
    2. title - A String
    3. rating - An Integer

The component should:

- call the `loadMetadata` function when the component is mounted
- render a title and a rating based on its props

### Part 2

There is an additional test that needs to be implemented where we should re-call `loadMetadata` when the `title` prop changes

### Part 3

The component can also take an `image` prop. Update the component to render the `image` and write an additional test to cover this functionality change.

#### Question

How could we make sure that our React component is accessible for the end user?
import React from "react";
import { mount, shallow } from "enzyme";

import { Asset } from "../index";

test.only("Should call loadMetadata on mount", () => {
  const loadMetadataSpy = jest.fn();
  mount(
    <Asset
      title="Spider-man"
      rating={5}
      image="https://dummy.com"
      loadMetadata={loadMetadataSpy}
    />
  );
  expect(loadMetadataSpy).toHaveBeenCalledTimes(1);
  expect(loadMetadataSpy).toHaveBeenCalledWith("Spider-man");
});

test("Should re-call loadMetadata when the title changes", () => {
  expect.assertions(1);
});

test("Should render the correct metadata", () => {
  const loadMetadataSpy = jest.fn();
  const asset = shallow(
    <Asset
      title="Spider-man"
      rating={5}
      image="https://dummy.com"
      loadMetadata={loadMetadataSpy}
    />
  );

  expect(asset.find(".title").text()).toEqual("Spider-man");
  expect(asset.find(".rating").text()).toEqual("5 Stars!");
});
