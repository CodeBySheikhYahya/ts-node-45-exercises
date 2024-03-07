
// function k bracket k andar parameters hothay hain  jesay k aik parameter hay "size"ka or aik "messege "ka
// function k andar hii function run horaha hay is lia uski type voide hogii

function makeshirt(size:string="large", messege:string="i love typescript"):void
{

    console.log(`size: ${size}, messege: '${messege}'`);


}

// large shirt with default messege
makeshirt();// output : size :large, messege:"i love typescript"

// medium shirt with default messege 
makeshirt("medium");// output size:medium , messege:"i love typescript!"

// costum shirt with a different messege and size 
makeshirt("small", "hello, typescript!");// output size:samll , messege:"hello,typerscript!"