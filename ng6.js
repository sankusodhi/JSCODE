const input = require("readline-sync");
let n = input.question("Enter a positive number");
var i ,flag = 0;
var p = "prime number";
for(i = 1;i<=n; i++)
{
    if(n%i==0){
        flag +=1;
    }
}
if(flag===2){
    console.log(p);
}
else{
    console.log("no");
}
