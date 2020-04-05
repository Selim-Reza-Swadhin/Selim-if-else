/* var passMark = 33;
result = 32;

if(result > passMark){
console.log('pass');
}
else{
    console.log('fail');    
} */

// prompt();
var result = prompt('Enter your number');
if(result >= 80 && result <= 100){
// console.log('A+');
document.getElementById('demo').innerHTML = "A+";
}

else if(result >= 70 && result <= 79){
// console.log('A');
document.getElementById('demo').innerHTML = "A";
}
else if(result >= 60 && result <= 69){
// console.log('A-');
document.getElementById('demo').innerHTML = "A-";
}
else if(result >= 50 && result <= 59){
// console.log('B');
document.getElementById('demo').innerHTML = "B";
}
else if(result >= 40 && result <= 49){
// console.log('C');
document.getElementById('demo').innerHTML = "C";
}
else if(result >= 33 && result <= 39){
// console.log('D');
document.getElementById('demo').innerHTML = "D";
}
else if(result == "" || result == null){
// console.log('Please enter your no.');
document.getElementById('demo').innerHTML = "Please enter your no.";
}
else if(result > 100 || result < 0){
// console.log('Invalid Marks');
document.getElementById('demo').innerHTML = "Invalid Marks";
}
else{
    document.getElementById('demo').innerHTML = "Fail";
}
