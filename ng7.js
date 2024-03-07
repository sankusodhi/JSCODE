const input=require("readline-sync");
let a=input.questionInt("Enter the number");
let b=input.questionInt("Enter the number");
var max=(a>b)?a:b;
var lcm=max;
while(true){
    if(lcm%a==0 && lcm%b==0){
        break;
    }
    lcm++;
}console.log(lcm);
