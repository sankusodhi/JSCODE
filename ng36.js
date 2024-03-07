const input=require("readline-sync");
let n=input.questionInt("enter the number");
let str="";
console.log("0")
let p=2;
for(let i=2;i<=n;i++){
    for(let j=1;j<=i;j=j+1){
        str+=p;
p=p*2;
    }
    p-=4
    // for(let k=1;k<=i;k=k*2){
    //     str+=k;
    // }
    str+="\n";
}
console.log(str);




