// Promise.resolve : so promise ke pas ek resolve method hoti he jisko bhi hm log call kr skte he.
// or uska work same as previous resolve which is inside promise.

const myPromise = Promise.resolve(5); // resolve jo bhi argument li he usko return krega.
// To abhi vo return ki hui value hm log  .then me fetch bhi kr skte he as understod previoulsy.
Promise.resolve(5).then((value)=>{
    console.log(value)
})

// M IMP :- then() method always promise hi return krta he. means backend me return krte time
// aese run hota he Promise.resolve(jo bhi return krna he vo).
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}

// Note:- .then() he vo always Promise pe hi lgta he dusre kisi pe nhi lg skta means string ya 
// array ya object etc...

myPromise()
    .then((value)=>{
        console.log(value);
        value += "bar";
        return value; // yha pe ye jo value return ho rhi he vo Promise return ho rha he value ke
        // name se. or backend me vo code aesa he:- return Promise.resolve(value)
    })
    .then((value)=>{
        console.log(value);
    })

// To upr hmne ek promise bnaya fir usko call kiya fir then lga ke vapis call kiya. To aese hm log
// any number of times kr skte he. And isko hm log "Promise Chaining" bolte he. or yha pe bhi 
// common sense he ki then sirf promise pe hi lg skta he. to it means yha pe jo then ne return ki he 
// jo value uspe hi dusri bar call krne ke liye then gaya he mtlb then() jo return kr rha he vo
// Promise hi he.

// Now as we have discussed in callback helll and pyramid structure file ki that calback hell or 
// pramid ko debug krna or read krna thoda difficult ho jata tha. to uske liye hm log Promises use krke
// simple coed likh ke same o/p pa skte he. see below code.

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeText(heading1, "one", "red", 1000)
  .then(()=>changeText(heading2, "two", "purple", 1000))
  .then(()=>changeText(heading3, "three", "green", 1000))
  .then(()=>changeText(heading4, "four", "orange", 1000))
  .then(()=>changeText(heading5, "four", "orange", 1000))
  .then(()=>changeText(heading6, "four", "orange", 1000))
  .then(()=>changeText(heading7, "four", "orange", 1000))
  .then(()=>changeText(heading8, "four", "orange", 1000))
  .then(()=>changeText(heading9, "four", "orange", 1000))
  .then(()=>changeText(heading10, "four", "orange", 1000))
  .catch((error)=>{
      alert(error);
  })

//   Above code is same code to get that previous output in callback pyramid code. 
// Bt yha pe ek aur cheeze ki agr suppose 3rd eleent present nhi he to call direct .catch pe chla
// jayega nd vo usme jo likh he vo error de dega means kehne ka mtlb ye he ki agr bich e hi khi pe bhi
// error aa gyi he to aage ka code run nhi hoga. (means yha pe electrical ke series connection
// jesa he).