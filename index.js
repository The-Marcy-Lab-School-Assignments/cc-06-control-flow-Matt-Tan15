//1
function sumOfThreeAndFive(){
  let sum = 0;
  for(let i = 1; i <= 1000;i++){
      if(i % 3 === 0 || i % 5 === 0){
          sum += i;
       } 
    }return sum;
}

function greaterNum(num1,num2){
  if(num1 % 1 === 0 && num2 % 1 === 0){
  if(num1 > num2){
      return num1;
  } else if(num2 > num1){
      return num2;
      } else return "both integers are equal";
  } else return null;
}

function oddAndEvenInFifteen(){
  for(let i = 0; i <= 15; i++){
      if(i % 2 === 0){
          console.log(i + " is even");
      } else console.log(i + " is odd");
  }
}

function sortThreeNums(num1,num2,num3){
 if(num1 >= num2 && num1 >= num3) {
   let max = num1;
   if (num2 >= num3) {
     console.log(max, num2, num3);
   } else {
     console.log(max, num3, num2);
   }
 } else if(num2 >= num1 && num2 >= num3) {
   let max = num2;
   if (num1 >= num3) {
     console.log(max, num1, num3);
   } else {
     console.log(max, num3, num1);
   }
 } else {
   let max = num3;
   if (num1 >= num2) {
     console.log(max, num1, num2);
   } else {
     console.log(max, num2, num1);
   }
 }
} 

console.log(sumOfThreeAndFive());
console.log(greaterNum(5,2));
oddAndEvenInFifteen();
sortThreeNums(-13,-13,-1);


