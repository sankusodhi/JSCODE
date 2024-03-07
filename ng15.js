const input=require("readline-sync");
let N=input.questionInt("Enter the number");
let max1=input.questionInt("enter ");
var max2=input.questionInt("enter");
let tt;

for(let i=3;i<=N;i++){
    let b=input.questionInt("enter");
    if(max2>max1){
        tt = max1;
         max1 = max2;
         max2 = tt;
    }
  

    if(max1 < b){

   tt=b;

    b = max2;
    max2 = max1;
    max1 = tt;
    }else{


        if(max2 < b){
            tt = max2;
            max2 = b;
            b = tt;
        }
    }
}
console.log(max2)