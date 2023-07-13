let str=prompt("ENTER THE WORDS: ");
let string = str.split(" ");
let len= string.length;
let s="";
for(i=0;i<len;i++){
    let temp=string[i].split("").reverse().join("");
    s+=temp;
    s+=" "; 
}
console.log(s);