const input=require("readline-sync");
let N=input.questionInt("enter the number")
let string="";
for(let i=1;i<=N;i++){
    for(let j=1;j<N-i;j++){
    string +="";
    }
    for(let k=0;k<2*i-1;k++){
        if(i===1||i===N){
            string +="*";
        }
       else{
        if(k===0||k===2*i-2){
            string +="*"
        }
        else{
            string +=" ";
        }
      }
    }
    string +="\n";
}
console.log(string);