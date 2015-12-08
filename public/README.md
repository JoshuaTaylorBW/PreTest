# Iteration / loops

There's a common pattern with iteration where you:

* assign a variable (the accumulator)
* iterate over an array or object
* in each iteration, change the variable
* return the variable

This exercise will give you several chances to practice this pattern.

## Objectives

To reinforce and practice the following:

- iterating over objects and arrays
- accumulators
- manipulating the DOM
- pure functions
- single responsibility
- separation of concerns
- string concatenation
- pivotal tracker, developer workflow

## Instructions

- Write the appropriate code in `js/dom.js` and `js/logic.js`
- Open `index.html` in your browser and click the buttons to see your results
- git, add, commit and push after each button works (use a descriptive commit message)

By the end of the exercise you should have 1 event listener per button in `js/dom.js` and you should have 1 function per button in `js/logic.js`.

### `js/logic.js`

In `js/logic.js` write only pure functions: functions that take inputs, make calculations and return a result.  An example of a pure function is:

```js
var biggest = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

### `js/dom.js`

In `js/dom.js` write all of your code that will work with the DOM.  For example:

```
function showResults(results) {
  var div = $("#results");
  div.append("<h3>$" + results + "</h3>");
};
```

## Stories

You should work on one story at at time by first "estimating" in points how long
you think the story will take you to complete. Click the "start" button when you begin
work. Once you have completd the feature, you should click the "finish" button, but
DO NOT "deliver" the story just yet.

After "finishing" a story, you should deploy your app to firebase and click through
the feature you just finished to confirm that everything is in working order.
Then, you should add the link to your deployed app to the activity area in the tracker story
and finally, hit the "deliver" button. Only then, should you "start" your next story,
rinse and repeat.

PROCESS:

* Estimate story points
* "Start" story
* add, commit, push when feature is complete
* "Finish" story
* Deploy to firebase
* add deploy link to "Activity" for that story
* "Deliver" the story
* rinse and repeat

## Exercise 1 - Prices

Create a Tracker project called `js-iteration` and upload [this csv](https://s3.amazonaws.com/js-iteration-stories/js_iteration_20151207_2344.csv)
to add stories.

Begin working through each story, one at a time.

## Exercise 2 - Names

* Upload this [CSV of Stories](https://s3.amazonaws.com/js-iteration-stories/js_iteration_names_20151208_0001.csv)
to your tracker project
* Invite the instruction team to your Tracker project
  * in `settings` click `Add/Remove Members`
* Begin working through stories one at a time.

As part of this exercise, you'll need to append multiple DOM elements.

Here's an example of how to add an `li` to a `ul`:

```js
var ul = $('.myUl');
ul.append('<li>HELLO</li>');
```

For this exercise, in `js/dom.js` you should find the textarea and get its `textContent`, then pass this string to functions in `js/logic.js`.

In `js/logic.js`, you should write functions that take in strings, and return arrays.

In `js/dom.js` you should iterate over these results and append DOM elements to the answers div. This will be the first time you'll need to write a `for` loop in `js/dom.js`.

HINT: you'll want to clear the `ul` each time a new button is selected.

## Stretch Goal

Rewrite all functions in `js/logic.js` to use:

- `forEach`
- `map`
- `reduce`

Write tests for your pure functions
