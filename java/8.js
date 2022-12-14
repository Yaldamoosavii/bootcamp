var numbersArray=[1,13,22,123,49];
if (numbersArray[0]<numbersArray[1]) {
    min=numbersArray[0];}
    else{
        min=numbersArray[1];
    }
for (let i=0; i <numbersArray.length; i++) {

  
    if (numbersArray[i]<min) {
       min=numbersArray[i]; 
    }  
}

for (let s = 0; s <=numbersArray.length; s++) {
   if (numbersArray[s]==min) {
    numbersArray.splice(s,1);
   }
}

min=numbersArray[0];

for (let k = 0; k <=numbersArray.length; k++) {
  if (numbersArray[k]<min) {
    min=numbersArray[k];
  }    
}

console.log(min);


