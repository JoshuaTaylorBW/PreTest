/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

$("#sum-all").click(function () {
  sum($('.all-prices option'));
});
$("#count-selected").click(function () {
  countSelected($(".all-prices").val());
});
$("#sum-selected").click(function () {
  sumSelected($(".all-prices").val());
});
$("#average-all").click(function () {
  average($('.all-prices option'));
});
$("#average-selected").click(function () {
  averageSelected($(".all-prices").val());
});
$("#all-names").click(function () {

  $('#answer').empty();
  printAllNames($('.all-names').val());
})

$("#first-names").click(function () {
  $('#answer').empty();
  printFirstNames($('.all-names').val());
})

$("#last-names").click(function () {
  $('#answer').empty();
  printLastNames($('.all-names').val());
})
$("#names-with-lengths").click(function () {
  $('#answer').empty();
  printAllNamesAndLength($('.all-names').val());
})

function changeAnswer(value){
  document.getElementById("results").innerHTML = value;
}
function addToList(value) {
  $("#answer").append("<li>"+value+"</li>")
}
