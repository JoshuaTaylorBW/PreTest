/*

Hints for the first problem:

1. Define a function that:
- is assigned to a variable named `sum`
- has one parameter named `options`
- returns the calculated sum of all of the values of all of the options passed in

NOTE: you can use a `for` loop to make this happen.

*/
function sum(mapItem) {
  var sum = 0;
  var values = $.map(mapItem, function(e) { return e.value; });
  for(var i = 0; i < values.length; i++){
    sum += Number(values[i]);
  }
  changeAnswer("$"+sum.toFixed(2));
  return sum;
}

function giveSum(mapItem){
  var sum = 0;
  var values = $.map(mapItem, function(e) { return e.value; });
  for(var i = 0; i < values.length; i++){
    sum += Number(values[i]);
  }
  return sum.toFixed(2);
}

function countSelected(values) {
  var sum = 0;
  changeAnswer(values.length);
}

function sumSelected(values) {
  var sum = 0;
  values.forEach(function (i) {
    sum += Number(i);
  });
  changeAnswer("$"+(sum).toFixed(2));
  return sum;
}

function average(element) {
  var theSum = giveSum(element);
  var values = $.map(element, function(e) { return e.value; });
  changeAnswer("$"  + (theSum / values.length).toFixed(2));
}

function averageSelected(values) {
  var sumOf = sumSelected(values);
  var average = sumOf / values.length;
  changeAnswer("$"+(average).toFixed(2));
}
function printAllNames(values) {
  var allNames = values.split("\n");
  for(var i = 0; i < allNames.length; i++){
    addToList(values.split("\n")[i]);
  }
}

function printFirstNames(values) {
  var allNames = values.split("\n");
  for(var i = 0; i < allNames.length; i++){
    addToList(values.split("\n")[i].split(" ")[0]);
  }
}


function printLastNames(values) {
  var allNames = values.split("\n");
  for(var i = 0; i < allNames.length; i++){
    addToList(values.split("\n")[i].split(" ")[1]);
  }
}

function printAllNamesAndLength(values) {
  var allNames = values.split("\n");
  for(var i = 0; i < allNames.length; i++){
    addToList(values.split("\n")[i] + " " + values.split("\n")[i].length);
  }
}
