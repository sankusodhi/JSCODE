const input=require("readline-sync");
let N=input.questionInt("Enter the number");
let a=input.questionInt("enter");
var min=a;
for(let i=2;i<=N;i++){
    let b=input.questionInt("enter");
    if(min>a){
       min=a;
    }
    else{
        min=min;
    }
}
console.log(min);