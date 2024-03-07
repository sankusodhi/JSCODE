const input=require("readline-sync");
let n=input.questionInt("enter the number");
let str="";
let j;
for(let i=1;i<=n;i++){
    for(let j=0;j<=i;j++){
        str +=j;
    }
    for( j=2;j<=i;j=j*2){
            str+=j;
        }
        for(let k=j;k<=i;k=k*2){
            str+=k;

        }
        str+="\n";
    }
    console.log(str);
