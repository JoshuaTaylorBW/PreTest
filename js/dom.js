/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

document.getElementById("sum-all").addEventListener("click", function () {
  sum($(".all-prices"));
});
document.getElementById("count-selected").addEventListener("click", function () {
  countSelected($(".all-prices").val());
});
document.getElementById("sum-selected").addEventListener("click", function () {
  sumSelected($(".all-prices").val());
});
document.getElementById("average-all").addEventListener("click", function () {
  average($(".all-prices").val());
});
document.getElementById("average-selected").addEventListener("click", function () {
  averageSelected($(".all-prices").val());
});

function changeAnswer(value){
  document.getElementById("results").innerHTML = value;
}
