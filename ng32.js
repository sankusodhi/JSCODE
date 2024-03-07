const input=require("readline-sync");
let N=input.question("Enter the number");
let string ="";
for(let i = 1;i<=N;i++){
    for(let j=0;j<i;j++){
        string +=" ";
    }
    for(let k=0;k<i;k++){
        string +="*";
    }
    string +="\n";
}
for(let i=1;i<=N-1;i++){
    for(let j=0;j<N-i;j++){
        string +=" ";
    }
    for(let k=0;k<N-i;k++){
        string +="*";
    }
    string +="\n";
}
console.log(string);