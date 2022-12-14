var numbersArray=[1,13,22,13,49];
for (let i = 0; i <= numbersArray.length; i++) {
   for (let j = 1; j < numbersArray.length; j++) {
    if (numbersArray[i]==numbersArray[i+j]) {
        console.log(numbersArray[i]);
    }
    
   }
    
}