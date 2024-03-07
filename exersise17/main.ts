let mehmanlist :Array<string>=[
    'quidii no:804',
    'amay',
    'gogo',
    'babai',        
    'ebad bhai',    
    'khalomama',    
    'butt sahb',
    'sana khalique',
    'commisoner rawlpindi',
    'may aday'
  ]
//console.log(` i can only invite two people to dinner`)

  while(mehmanlist.length>2){
    let removemehmaan = mehmanlist.pop()
console.log(` sorry ${removemehmaan} i cant invite you to dinner ok sorry next time pakka bulaonga`)
  }
  for(let name of mehmanlist)
  
  {
console.log(`hey ${name}you are still invited buddy`)

  }
  // ab last k 2 naam bhi remove karnay hain or usko empty karna hay so is waja say ham baari baari kar .pop kii cmmand ko use karengay
  mehmanlist.pop(  )
  mehmanlist.pop()
  console.log(`guest list after dinner:`, mehmanlist);// is waja say empty array show hua
  

//   for (let i = mehmanlist.length; i > 2; i--) {
//     let removemehmaan = mehmanlist.pop();
// }
//[33,344,55,33,4555,33,,444,55]