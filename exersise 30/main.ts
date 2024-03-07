// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const userNames:string[]=['admin','sheikh yahya khan','ebad','mehmoona','aday','baba','javeria'];

function greet_User():void{
    for (const i in userNames){

        if(userNames[i].toLowerCase()=== 'admin'){
            console.log(`Hello admin, would you like to see a statuus report?`);}
            else {console.log(`hello ${userNames[i]},thank you for logging in again.`)
        
            
        }
    }
}
greet_User();
// ismay hamnay for in ka loop use kara hay or jo i hay wo array k index ko show kartha hay
// Define a function to greet users
// Loop through each user name in the array
// Check if the user name is 'admin'
// If it's 'admin', print a specific message
// If it's not 'admin', print a general greeting message
// Call the greetUser function to execute it


// Explanation:

// We have an array called userNames containing different user names.
// We define a function greetUser() that iterates over each element in the userNames array.
// Inside the loop, it checks if the current username is 'admin'. If it is, it prints a specific message. Otherwise, it prints a general greeting message for that user.
// Finally, we call the greetUser() function to execute it and see the greetings printed on the console.