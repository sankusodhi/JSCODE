const input=require("readline-sync");
let N=input.questionInt("enter the number")
let string="";
for(let i=1;i<=N;i++){
    
    for(let j=0;j<i;j++){
        if(i===N){
            string +="*";
        }
        else{
            if(j==0||j==i-1){
                string +="*";
            }
            else{
                string +=" ";
            }
        }
    }
    string +="\n";
}
console.log(string);