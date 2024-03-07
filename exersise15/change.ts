 let Mehmanlist:Array<string>=[
    "commisoner rawlpindi",
    "amay",
    "gogo",
    "babai",
    "khalomama",
    "butt sahb",
    "sana khalique",

    ];
    

    let guestnamewhocantcome:string="khalomama";
    console.log(`${guestnamewhocantcome} cant make dinner`)
    //Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
    let newGUEST:string="Aijaz ali jalbani"

    let indexofguestnamewhocantcome :number=Mehmanlist.indexOf(guestnamewhocantcome);
    // console.log(indexofguestnamewhocantcome);
   if (indexofguestnamewhocantcome !== -1) {
    Mehmanlist [indexofguestnamewhocantcome]= newGUEST

   }
//    console.log(Mehmanlist[3])

console.log("second set of invitation");
Mehmanlist.forEach((guest:string) =>{

    console.log(`dear ${guest}, you are invited to dinner`)
}

)
