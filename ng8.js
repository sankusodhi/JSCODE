const input=require("readline-sync");
let a=input.questionInt("Enter the number");
let b=input.questionInt("Enter the number");
var hcf=0;
for(let i=1;i<=a||i<=b;i++){
    if(a%i==0 && b%i==0)
    hcf=i;
}
console.log(hcf);