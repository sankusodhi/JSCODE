const input=require("readline-sync");
let N=input.questionInt('Enter the number');
var x=2;
var c=1;
var sum=0;
for(let i=1;i<2*N;i=i+2){
    if(c==1){
        sum=sum+x**i/i;
        
         c = 2
    }
    else{
        sum=sum-x**i/i;
        
        c = 1
    }c
    
}

console.log(sum);
