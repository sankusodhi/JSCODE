const input=require("readline-sync");
let n=input.questionInt("enter the number");
let str="";
for(let i=1;i<n;i++){
    for(let j=1;j<=i;j++){
        str+=j;
    }
    for(let j=i-1;j>0;j--){
        str+=j;
    }
    str+="\n";
}
console.log(str);
