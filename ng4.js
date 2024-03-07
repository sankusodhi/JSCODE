const input = require("readline-sync");
let n = input.question("Enter the number");
var number =n;
var r =1;
//var t;
var rev=0;

while(number>0){
    r =number%10;
    number = Math.floor(number/10);
   rev = rev * 10 +r;

}
//rev = Math.floor(rev / 10);


if(rev == n){
    console.log("yes");
}
else{
    console.log("no");
}