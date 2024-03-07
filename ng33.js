const input=require("readline-sync");
let N=input.questionInt("Enter the number");
var str = "";
for (let i = N / 2; i < N; i += 2) {
  // print first spaces
  for (let j = 1; j < N- i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < N - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = N; i > 0; i--) {
  for (let j = 0; j < N- i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);