// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.




const numbers:number[]=[1,2,3,4,5,6,7,8,9];
for (const number of numbers){

    let ordinal:string;
    if (number===1){
        ordinal="st";
    
    }else if (number===2){
        ordinal="nd";
    }else if(number===3){
        ordinal="rd";
    } else {
ordinal="th"
}
console.log(`${number}${ordinal}`);
}






// 1. We first create an array called `numbers` and put numbers 1 through 9 inside it.
// 2. We start a loop that goes through each number in the `numbers` array one by one.
// 3. Inside the loop, we have a variable called `ordinal` which we'll use to store whether the number is 1st, 2nd, 3rd, or any other number with 'th' at the end.
// 4. We check each number:
//    - If the number is 1, we set `ordinal` to "st".
//    - If the number is 2, we set `ordinal` to "nd".
//    - If the number is 3, we set `ordinal` to "rd".
//    - Otherwise (for any other number), we set `ordinal` to "th".
// 5. After determining the correct ordinal suffix for each number, we print it out along with the number itself using `console.log()`.

// So, when the code runs, it prints out each number from 1 to 9 along with its corresponding ordinal suffix. For example:
// - 1st
// - 2nd
// - 3rd
// - 4th
// - 5th
// - 6th
// - 7th
// - 8th
// - 9th