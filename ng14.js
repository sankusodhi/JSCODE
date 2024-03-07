const input=require("readline-sync")
let N=input.questionInt("Enter the number");
let a=input.questionInt("enter");
var max=a;
var secondmax=a;
var max1=a;
for(let i=2;i<=N;i++){
    let b=input.questionInt("enter");
    if(b>max){
        max=max;
        min=b;
    }
    else{
        max=b;
        min=max;
    }
    if (min>max){
    secondmax=max;
}




else{ 
    secondmax=min;
}
if (max>min)

{
    secondmax= min;
}else
{
    secondmax= max;
}

}