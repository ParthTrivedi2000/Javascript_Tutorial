// we know how the callback works in the synchronous programming language. Now let's see callback in
// asynchronous JS.
// new file of callbac-demp.html is created and this js file is attached there.

// So abhihtml file ke ander 7 h1 tag bnao with classname of "heading" or usme text rkho hello world.
// Abhi task ye he ki me jb bhi file run kru uske ek sec bad vo 1st h1 ka heading "hello world" se change
// ho ke "heading1" ho jana chahiye. 2sec bad dusre h1 tag ka "hello world" heading2 ho jana chahiye.

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
//  setTimeout(()=>{
//      heading1.textContent = "Heading 1"
//  },1000)

//  setTimeout(()=>{
//     heading1.textContent = "Heading 1"
// },3000)

// So similarly I want to chage below more headings after each 2 secs in orderly manner.
// So suppose abhi muje 1st vala change 4 sec bad krna he to uske bad sare changes ke liye vapis 
// calculation krke change krna hoga. even khi pe galti se koi ek sec km jyada likh di to vo pehle
// run ho jayega ya means it is not good thing.
// So kehne ka mtlb yhi he ki hme order me chlana he to means yha pe to koi issue nhi he ki niche 
// vala pehle change ho jaye or upr vala uske bad ho. Bt practical world me order matters a lot. 
// nd we want something in particular order to vha pe aese manually change krte time kuch mistake bhi
// ho skti he.

// So order me task krne ke liye hm log aese kr skte he

// callbacks , callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell  
// setTimeout(()=>{
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(()=>{
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(()=>{
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(()=>{
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//         },2000)
        
//       },1000)
      
//     },2000)
    
//   },2000)
  
// },1000)

// So upr hmne kya kiya ki order ko maintain krne ke liye settimeout me jo function bna rhe the uske
// ander hi next task ke liye time set krte gye. So simply bolu to it's nested callback which we can 
// see in above code which is known as "callback hell". It is somewhat difficult to read and debug it.

// To abhi hm log upr jo cheeze ki vhi same cheeza function bna ke krte he.
// abhi yha pe sirf settieout vala function add kiya. bt suppose abhi heading nmaed element available nhi 
// he to JS error degi. so to prevent that we can write if(element). so it will run only when element is
// present. now suppose element present nhi e to muje kuch print krvana he. to me else block add krke
// kr dunga.
// ye to hua 1st heading ke sath change. Npw abhi muje sare headings ke liye order wise ye cheeze 
// perform krni he after particular secs during each change. uske liye me dusre callback ka use kr
// skta hu jisko me tbhi pas kraunga jb 1st vali heading ka changes ho jaye taki mera oreder maintain
// rhe. or usme bhi agr vo element means heading available nhi hua or ya to user ne vo vala callback
// pas hi nhi kiya to JS error degi to usse bchne ke liye we can write if(callback). or ha ye callback
// function me seperately bna ke bhi pas kr skta hu ya to directly main function ko call krte time
// argument me hi bna skta hu jo hmne niche vale code me kiya he. Or same as prvious ki jb error aaye
// tb muje kuch print krana he. to uske liye bhi hmne main functio me seperate argument pas kra di h
// jo ek callback function hoga nd vo error vale time pe run hona chahiye. ye callback function bhi
// seperately bna ke call kr skte he ya to directly argument pas krte time bna skte he jesa hmne yha pe
// kiya he. So finally my code looks like below. is is known as "callback hell" as it is nested
// callbacks. It looks like pyramid so it is also known as "pyramid of doom".


// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
//   setTimeout(()=>{
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       if(onSuccessCallback){
//         onSuccessCallback();
//       }
//     }else{
//       if(onFailureCallback){
//         onFailureCallback();
//       }
//     }
//   },time)
// }
// // pyramid of doom
// changeText(heading1, "one","violet",1000,()=>{
//   changeText(heading2, "two","purple",2000,()=>{
//     changeText(heading3, "three","red",1000,()=>{
//       changeText(heading4, "four","pink",1000,()=>{
//         changeText(heading5, "five","green",2000,()=>{
//           changeText(heading6, "six","blue",1000,()=>{
//             changeText(heading7, "seven","brown",1000,()=>{
//               changeText(heading8, "eight","cyan",1000,()=>{
//                 changeText(heading9, "nine","#cda562",1000,()=>{
//                   changeText(heading10, "ten","dca652",1000,()=>{
                    
//                   },()=>{console.log("Heading10 does not exist")})
//                 },()=>{console.log("Heading9 does not exist")})
//               },()=>{console.log("Heading8 does not exist")})
//             },()=>{console.log("Heading7 does not exist")})
//           },()=>{console.log("Heading6 does not exist")})
//         },()=>{console.log("Heading5 does not exist")})
//       },()=>{console.log("Heading4 does not exist")})
//     },()=>{console.log("Heading3 does not exist")})
//   },()=>{console.log("Heading2 does not exist")})
// },()=>{console.log("Heading1 does not exist")})