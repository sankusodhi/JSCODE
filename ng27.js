const input=require("readline-sync");
let N=input.questionInt("enter the number")
let string="";
for(let i=1;i<=N;i++){
    for(let j=1;j<i;j++){
    string +="";
    }
    for(let k=0;k<2*(N-i)-1;k++){
        string +="*";
    }
    string +="\n";
}
console.log(string);