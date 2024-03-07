// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function k saath const is waja say lagtha hay q k ab ismay koi cheez change nahi hothi agar hothii bhi hay tho  tho wo uskay andar ki cheezein change hothii hay or jo ye arrow k saath string lagaya hay iska mtlb hay k hamay output bhi string chahia r tabhi nichay hamnay return lagaya hay or agar srf consol.log karthay tho  or doosra ye k return jo hay wo optional hay agar may ye nahi bhii likoonga tab bhi answer dega or agar may return ko  ko khatam karoonga tho mujy :string => ko khatam kar k mujhay voide laga na hoga answer donon conditions may same aiga aik screenshot hay wo return k naam k saath wo save hay
const make_shirt=(size:string,message:string):void=>{

    console.log(`size:${size}, messege'${message}' `);



}

//call the function
// agar hamay ye variable may karna ho tho(call the function through variable)

let size:string="xl";
let messege:string="inshallah sheikh yahya khan will future billionarie"
make_shirt(size,messege);
// directly call the function
make_shirt(" double xl", "inshallah sheikh yahya khan will be future billionarie")
