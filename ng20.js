const input=require("readline-sync");
let N=input.questionInt("Enter the number");
for(let i=N;i>0;i--){
    let str="*";
    console.log(str.repeat(i));
}