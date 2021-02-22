var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your total bill?"));


var tax = num1*.07

var tip = (tax + num1)*.05

var sum = tip + tax + num1

containerEle.innerHTML=sum;