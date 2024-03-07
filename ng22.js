const input=require("readline-sync");
let N=input.questionInt("Enter the number");
let string="";
for(let i=0;i<N;i++){
   for(let j=0; j<N;j++){
    string +="*";
   }
   string +="\n";
}
console.log(string);