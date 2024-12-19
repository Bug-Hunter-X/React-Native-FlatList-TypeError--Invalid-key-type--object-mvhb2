# React Native FlatList TypeError: Invalid key type: object

This repository demonstrates a common error encountered when using `FlatList` in React Native: a `TypeError` due to an invalid key type. The `keyExtractor` function must return a primitive (string or number) key for each item in the data array.  Using objects or other complex data types as keys will lead to this error.  The solution involves correcting the `keyExtractor` function to provide primitive keys.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using your preferred React Native development environment.
4. Observe the error in the console.

## Solution

The solution, demonstrated in `bugSolution.js`, involves correctly implementing the `keyExtractor` function to return string or numeric keys.