// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// .map ka jo function hotha hay wo hamay aik arrays say aik or new array bana kar detha ha

 // .map ko use karnay ka treeka
//  const num1:number[]=[1,2,3,4,5,6,7,8,9,10]
//  console.log(num1);
 // ab hamay .map ko use karthay huway is num2 walay say dooosra array banana hay
//  const num2:number[]=num1.map(j=>j*3)
//  console.log(num2);
 // ab yahan per j ki jaga ham kuch bhi lay saktay hain ye just reresent karnay k lia hay or ab .map ki waja sya ye jo num1 k saray number hain unko 3 say multiply kar k aik naya array banadega num 2 k naam say

 // step 1 array
const current_users:string[]=["qamama","khalomama","unnmamam","haroon mama","aslam mama","baba"];

// ab jo new array banangay usmay 3 naam same lengay jo new user k naam say banegii

const new_users:string[]=["qamAma","khaloMama","unnmamam","huraira","aijaz"];

// step 2 function (2 arrays ko campare kara hay currect users waali or new users waalu)
// first step of function  
function CheckUserNames(current_users:string[],new_users:string[]):void{

    const LowerCaseCurrentusers=current_users.map(user =>user.toLowerCase());
    // 2nd step of function
    for (const  newuser of new_users){

        const lowercasenewusers= newuser.toLowerCase();
        if (LowerCaseCurrentusers.includes(lowercasenewusers)){
            console.log(`username "${newuser}" is already taken. please enter a newusername.`);
        } else{
            console.log(`username "${newuser}" is available`);
        }
    
    }
}
// console.log(current_users)
// test the function
CheckUserNames(current_users,new_users);




// 1. **List of Current and New Usernames**: 
//    - We start with two lists: `current_users` which contains usernames of people already using the system, and `new_users` which contains usernames of people who want to join.

// 2. **Converting to Lowercase**:
//    - To ensure that our comparison is case insensitive, we convert all usernames in the `current_users` list to lowercase. This makes it easier to check if a username already exists, regardless of whether it's written in uppercase, lowercase, or a mix of both.

// 3. **Checking for Existing Usernames**:
//    - We go through each username in the `new_users` list.
//    - For each new username, we also convert it to lowercase.
//    - Then, we check if this lowercase version of the new username exists in the `lowerCaseCurrentUsers` list (the list of current usernames converted to lowercase).
//    - If it exists, we inform the user that the username is already taken and suggest they choose a different one.
//    - If it doesn't exist, we inform the user that the username is available.

// 4. **Case Insensitivity**:
//    - This step ensures that even if a username is written in a different case (uppercase, lowercase, or mixed), it will still be treated as the same username. For example, "John" and "john" will be considered the same username.

// 5. **Output**:
//    - After checking all the new usernames against the existing ones, we inform the user about the availability of each username.

// Overall, the process simulates how websites ensure that each user has a unique username by comparing new usernames with existing ones, considering case insensitivity to avoid duplication.