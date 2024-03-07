const input = require("readline-sync");
let a =input.question("Enter the number");
let b =input.question("Enter the number");
let c =input.question("Enter the number");
let d =input.question("Enter the number");
var max1;
var min1;
var max2;
var min2;
if(a>b){
    max1=a;
    min1=b;
}else{
    max1=b;
    min1=a;
}
if(c>d){
    max2=c;
    min2=d;
}else{
    max2=d;
    min2=c;
}
if(max1>max2){
    console.log(max1);
}else{
    console.log(max2);
}