// functions can return function.

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World!");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans); // ye line pura function print kregi na ki sirf return vala Hello world statement.
// ans(); //ye line me hmne () lga ke call kiya he to proper output Hello World! milega.

function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName);
        console.log(lastName);
    }
    return printName;
}

const ans = printFullName("Parth","Trivedi");
ans(); //o/p :- Parth Trivedi

// for detailed understanding of the execution of above code, pls watch that video.
// Bt conclusion is, ye cheez khas yad rkhna. ki jb bhi koi function return hota he dusre function se
// to vo khali hath return nhi hoga bulki jisme se means jo bhi function se return hua hoga uski local
// memory ko bhi sath leke return hoga.
// means suppose function1 is returning function2, then at the time of return, returned things will be
// function2 + local memory of fnction1.

// To uper vale code ke case me same cheeze hui he. Jb printFullName call hone ke bad return hoga to
// 2 cheeze return hogi and ans ke pas aayegi. function printName + local memory of printFullName function.

// or simply thoda technically hm bol skte he ki jb bhi koi inner function return hoga to vo apne
// lexical environment (i.e. usko jis function ne call kiya tha uski memory) ke sath  or usko leke return hoga
// isko closure bolte he.


// **Other Closure Examples**

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans1 = hello("arg");
ans1();

// -----------------------------------------------------

function myFunction(power){
    return function(number){
        console.log(number**power);
    }

}

const square = myFunction(2);
const ans2 = square(3);
console.log(ans2);

// in above code we use function declaration. bt that code can be written using arrow functions also
// which makes code very short. For example.
// const myFunction = power => number => number**power; 

// ---------------------------------------------------------

// Now there is one application of closure. Suppose khi khi pe aesa hota he ki
// koi function ek hi bar call krna hota he. aur agr dusri bar call krte he to kuch problem ho skti he
// to simply abhi ke liy agr function 1 se jyada bar call hota he to hm log kuch msg print kra skte he
// ye cheez hm closure ka use krke bna skte he.

function func(){
    let count = 0;
    return function(){
        if (count < 1){
            console.log("U have called me!");
            count++;
    }
    else{
        console.log("mai already ek bar call ho chuka hu");
    }

}
    
}

const var1 = func();
var1();
var1();
var1();
const var2 = func();
var2();
var2();