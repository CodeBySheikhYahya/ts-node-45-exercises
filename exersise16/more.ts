import { connect } from "http2";

let Mehmanlist:Array<string>=[
    "amay",
    "gogo",
    "babai",
    "khalomama",
    "butt sahb",
    "sana khalique",
    "commisoner rawlpindi",
    ];
    
    for( let guest of Mehmanlist){
       // console.log(`HELLO ${guest},WE FPUND A BIGGER DINNER TABLE`)
    }

    let newmehman:string="quidii no:804"
    Mehmanlist.unshift(newmehman);
    //console.log(Mehmanlist);

    // hamnay jo ye .unshift use kara iskii waja say ye jo naam add kara tha ye top per agaya agar array may kisi bhi naam ko top per laana ho tho ye uese karengay

    // In TypeScript, .unshift() is a method that is used to add elements to the beginning of an array. Let's break it down easily:
    let newmiddlemehman:string="ebad bhai"
    // beech may value lanay k lia idex ko divide by 2 karengay
    let middleindex:number=Math.floor(Mehmanlist.length/2);
  Mehmanlist.splice(middleindex,0,newmiddlemehman);
 // console.log(Mehmanlist);
 let newguestattheend:string="may aday";
 Mehmanlist.push(newguestattheend);
// console.log(Mehmanlist);
console.log("new set of invitation of messege")
 for(let guest of Mehmanlist){

    console.log(`dear ${guest},Join us for a delicious dinner under the stars at 7 PM tomorrow!`)
 }