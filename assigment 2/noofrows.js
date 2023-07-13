let n =parseInt(prompt("Enter the number of rows: "));
let str="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++)
    str+=j;
    str+="\n";
}
console.log(str);