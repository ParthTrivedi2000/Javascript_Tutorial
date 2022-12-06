// events add krne ke 3 ways he.
// 1) add event in html file only. suppose muje btn pe click kre tb you clicked me print krana he. 
// to html file me jha pe btn present he vo tag me ek attribute add krdo. onclick and 
// vo attribute ki value JS ka code rhega jo hme perform krana he btn press hone pe vo.for exa.:-
{/* <button class="btn btn-headline" onclick = "console.log('You clicked me!')">Learn More</button> */}

// bt we will not use this method as it is too old method.

// method - 2)  jo btn pe click event add krna he usko pehle select kro. uske bad onclick event lgao.
// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function(){
//     console.log("You clicked me !!!!!");
// }

// this method also we will not use kyuki isme me click event ek se jyada bar nhi assign kr skta.

// Method - 3) hmare pas ek method he addEventListener. to 3rd method me hm pehle btn select krege
// or uske bad ye add eventlistener method lga dege.
const btn = document.querySelector(".btn-headline");
console.log(btn);
// function clickMe(){
//     console.log("You have clicked me !!!!!");
// }
// btn.addEventListener("click",clickMe); //or we can directly write function into eventlistener method.
// btn.addEventListener("click", function clickMe(){
//     console.log("You have clicked me !!!!!");
// })
// or we ca use directly arrow functions
btn.addEventListener("clicked", ()=>{
    console.log("You have clicked me using arrow functions")
})





// This keyword inside eventListener callback
// wht is the value of this?
btn.addEventListener("click",function(){
    console.log("you clicked me!!!");
    console.log("value of this is")
    console.log(this);
})
// yha pe norml function use kiya he isliye this ki value jo object jisne method call ki he vo hogi
// it means here btn.
// agr arrow function use kiya he to this ki value window object hogi. (as we know one level up above object which caled method)
btn.addEventListener("click",()=>{
    console.log("you clicked me!!!");
    console.log("value of this is")
    console.log(this);
})




// Click event on multiple buttons
// created one new clickEvent.html file. jst attach this JS file into it.

const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })