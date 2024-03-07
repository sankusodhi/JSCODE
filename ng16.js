const input=require("readline-sync");
let N=input.questionInt("Enter the number");
var x=2;
var sum=0;
for(let i=1;i<=N;i++){
    sum=sum+x**i/i;
    //console.log(i);
}
console.log(sum);