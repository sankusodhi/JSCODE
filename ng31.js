const input=require("readline-sync");
let N=input.questionInt("Enter the number");
let string = "";
for(let i = 0;i < N;i++){
    for(let j = 0;j < i;j++){
        string += " ";
    }
    for(let k = 0;k <( N-1)*2-1;k--){
        string += "*";
    }
    string += "\n";

}
for(let i = 2;i <= N;i++){
    for(let j = N;j > i;j--){
        string += " ";
    }
    for(let k = 0;k <i*2-1;k++){
        string += "*";
    }
    string += "\n";
}
console.log(string);