const input=require("readline-sync");
let N=input.questionInt("Enter the number");
var char=``;
var count=1;
for(let i=1;i<=N;i++)
{
    
    for(let j=1;j<=i;j++){
        char+=count;
        count++;
    }
    char+="\n";
}
console.log(char);