const input=require("readline-sync");
let N=input.questionInt("Enter the number");
for(let i=1;i<=N;i++){
    let str="*";
    console.log(str.repeat(i));
}