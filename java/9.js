var str=prompt("enter your text");
var text="";
for (let s= str.length ; s =1; s--) {
        v=str.substring(s,s-1) ;
    text=(v)+ text;
}
console.log(text);