var test = "Hello, How are you.";
// var ln = test.length;
var ln = test.indexOf("are");//test is object and indexOf() is method.
var ln = test.lastIndexOf("e");

console.log(ln);


document.getElementById('demo').innerHTML = test;
