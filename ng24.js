const input=require("readline-sync");
let N=input.questionInt("enter the number")
let string="";
for(let i=0;i<N;i++){
    
    for(let k=0;k<N-i;k++){
        string +="*";
    }
    
    string +="\n";
}
console.log(string);
