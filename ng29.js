const input=require("readline-sync");
let N=input.questionInt("enter the number")
let string="";
for(let i=1;i<=N;i++){
    for(let j=N;j<i;j--){
    string +=" ";
    }
        for(let k=0;k<i*2-1;k++){
            string +="*";
    }
        string +="\n";
    }
           for(let i=1;i<=N-1;i++){
              for(let j=N;j<i;j--){
               string +=" ";
    }
               for(let k=(N-i)*2-1;k>0;k--){
               string +="*";
    }
       string +="\n";
 }
 console.log(string);