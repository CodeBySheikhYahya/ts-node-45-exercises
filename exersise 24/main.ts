// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//TEST FOR EQUALITY AND INEQUALITY WITH STRINGS
const str1:string="YAHYA";
const str2:string="yahya";
console.log(str1===str2); //false
console.log(str1!==str2);//true


// test using the lower case funstion 

const text1:string=("Sheikh Yahya Khan");
const text2:string=("sheikh yahya khan");
console.log(text1.toLowerCase()===text2);// true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1:number=15;
const num2:number=10;
console.log(num1 ===num2);// false
console.log(num1!==num2);// true
console.log(num1>num2); //true
console.log(num1<num2);//false
console.log(num1>=num2); //true
console.log(num1<=num2);//false


// • Tests using "and" and "or" operators
const x:number=7;
const y:number=14;
const z:number=21

// condition for true and false
// AND gate gives true output only when both input true and OR gate gives a true output ehen atleast one output is true

// for and operator for true
console.log(x<y && y<z); // both true

// for or operator for true
 console.log(x<y || y>z);// when atlease one is true in or operaor so answer becamea true

 // for and operator for false
 console.log(x>y && y<z);// for false

 // for or operator for false
 console.log(x>y || y>z);// both are false


 // • Test whether an item is in a array
 // incluse ka function use kara is lia tha k pata chal sakay k array may ye cheeez hay k nahi
// Test whether an item is in an array
const fruits: string[] = ['apple', 'banana', 'orange', 'pineapple'];
console.log(fruits.includes('pineapple')); // true
console.log(fruits.includes('grapes'));    // false


//Test whether an item is not in a array
const colors:string[]=["red","green","yellow","blue"];
console.log(!colors.includes('black'));// true
console.log(!colors.includes("red"));
