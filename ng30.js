const input=require("readline-sync");
let N=input.questionInt("Enter the number");
let string="";
for(let i=1;i<=N;i++){
    for(let j=N;j>i;j--){
        string+= " ";
    }
    for(let k=0;k<i*2-1;k++){
        if(k===0||k===2*i-2){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n";
}

let j;
for(let i=1;i<=N-1;i++){
    //console.log(i);
    for(j=1;j<i+1;j++){
        //string += "*";
        string += " ";
    }
    string += "*"

    for(let k = j+1; k <= (2*N-1)-i; k++){

        if ( k == (2*N-1)-i){

            string += "*";
        }else{
            string += " ";
        }
    }
    string += "\n";
 /*    for(let k=(N-i)*2-1;k>=1;k--){
        if(k==1||k==(N-1)*2-1){
            string += "*";
        }
        else{
            string += " ";
        }
    }
    string += "\n"; */
}
console.log(string);