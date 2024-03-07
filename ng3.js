const input=require("readline-sync");
let a=input.question("Enter the number");
let b=input.question("Enter the number");
let c=input.question("Enter the number");
let d=input.question("Enter the number");
var max;
var min;
var max1;
var min1;
var thirdmax;
if(a>b){
    max=a;
    min=b;
}else{
    max=b;
    min=a;
}if(c>d){
    max1=c;
    min1=d;
}else{
    max1=d;
    min1=c;
}if(max>max1){
    console.log(max1);
}else{
    console.log(max);
}