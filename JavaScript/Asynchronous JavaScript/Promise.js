// What is Promise?
// Promise vo value he ya to vo value ko represent krta he jo hme abhi nhi pta he bt bad me 
// future me pta chlegi. Even just for your information, in JS previously promise ka name 
// javascrip me kuch future se start hone vala word hi tha. 
// usko bad me new version me names chnge kiye gye he.

// example:- suppose I am promising you to cook fried Rice. to abhi mene aapko promise kiya he means
// uska status:pending, value: undefined. Abhi fried rice ke liye kuch cheeza me dekhunga ki vo sari
// available he ki nhi mere pas.
// const bucket = ["salt","rice",'vegetables','coffee',"chips"];
// bucket me itni sari cheeze pdi he. me abhi check krunga ki muje jo cheeze chahiye vo usme he ki nhi
// agr he to me bna dunga. or ek bar mene bna ke de diye to promise ka status:resolved, value:'fried
// rice' ho jayegi. Argr me koi bhi reason se nhi bna paya then promise ka status:rejected, value:
// 'salt is not available or something'.

// Now let's try to implement above example practically. upr to aese hi promise diya mene bt code me
// kese represent kru usko? to code me promise create kr skte he Promise() se.(Promise() ko aap
// constructor ya class bol skte ho). Promise() takes one callback function. ye callback function will
// takes 2 arguments resolve,and reject. Abhi resolve kya krta he jb me promise successfully
// complete krunga tb muje jo bhi value return krani hoti he vo me resolve use krke kraunga.
// Same for reject also agr promise fullfill nhi hua to jo bhi error me dena he ya kuh print krana he
// vo me reject ke through return kraunga.
// ye promise ko me koi variable me tore kr skta hu ya to koi function me return bhi kra skta hu.
// const myPromise = new Promise((resolve,reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice") //here u can return anything string, number,array,object...
//     }
//     else{
//         reject("Couldn't do it") //here also u can return anything.
//     }
// })

// Abhi upr jo kiya vo Prmise create kiya produce kiya. But now the most crucial part is consume
// this promise. (as a JS developer how to consume any promise is a very importnt and crucial part).
// So we have .then method to consume promise. then() will take 2 args. means it will take 2 
// callback function. 1st is resolve hua promise to kya krenge. 2nd is reject hua to kya krenge.
// ek cheez yad rkhna ki vo upr jo bhi values hmne resolve and reject ke through return krayi he na
// vo yha pe then ke ander jo callback he na uske pass callback ke input means argument me 
// fetch kr skte he for corresponding resolve and reject callbacks. See below code for more 
// understanind.

// myPromise.then(
//     // jb promise resolve hoga
//     (resolveReturnedValue)=>{
//         console.log("your ",resolveReturnedValue," is ready")
//     }
//     ,
//     // jb promise reject hoga
//     (errorValue)=>{
//         console.log(errorValue)
//     }
//     )

// Yha pe 2 callback function likhne ki bhi jarurat nhi he. means we have .catch() method jo promise
// reject honepe chlega to vo bhi hm log use kr skte he. which will take callback function as arg.

// myPromise.then(
//     // jb promise resolve hoga
//     (resolveReturnedValue)=>{
//         console.log("your ",resolveReturnedValue," is ready")
//     }).catch(
//         (errorValue)=>{console.log(errorValue)}
//         )



// Promise Asynchronously work krta he. let's see.
// ye promise he vo JS ka feature nhi he means browser ka feature he.

// console.log("script start");
// const bucket = ["salt","rice",'vegetables','coffee',"chips"];

// const myPromise = new Promise((resolve,reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice") //here u can return anything string, number,array,object...
//     }
//     else{
//         reject("Couldn't do it") //here also u can return anything.
//     }
// })

// myPromise.then(
//     // jb promise resolve hoga
//     (resolveReturnedValue)=>{
//         console.log("your ",resolveReturnedValue," is ready")
//     }).catch(
//         (errorValue)=>{console.log(errorValue)}
//         )

// for (let i=0; i<=100; i++){
//     console.log(Math.random(),i)
// }

// console.log("script end");

// run the above code and see the o/p. o/p will be script satrt then random numbers then script end
// then promise ki returned value.
// Now listen 1st line chli uske bad next line bucket vali chli. fir uske bad promise cretion vali line
// chli vo bhi ek object hi bnaya he. fir uske bad jo he na vo promise consumption he. Remember promise
// aways consume browser hi krta he. or .then method browser hi run krta he. to next line me .then()
// method aayi jo browser ke pas gyi. or JS next line pe move kr gyi. next JS ne for loop vali line chlayi
// uske bad script end vali chlayi. browser ne .then() ya .catch ko microtask queue me already bhej diya tha.
// (note:- promise jo add hote he vo microtask queue me hi add hote he na ki callback queue me).
// or as we know ki event loop usko aage jane nhi dega jb tk call stack me koi execution chl rha he tb tk.
// vo khtm hone ke bad eventloop aage jane diya and last me promise vali line bhi print ho gyi.

// Abhi suppose mere pas code me bich me setTimeout bhi he. For example.:

console.log("script start");
const bucket = ["salt","rice",'vegetables','coffee',"chips"];

const myPromise = new Promise((resolve,reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice") //here u can return anything string, number,array,object...
    }
    else{
        reject("Couldn't do it") //here also u can return anything.
    }
})

myPromise.then(
    // jb promise resolve hoga
    (resolveReturnedValue)=>{
        console.log("your ",resolveReturnedValue," is ready")
    }).catch(
        (errorValue)=>{console.log(errorValue)}
        )

setTimeout(()=>{
    console.log("Hello from settimeout")
},0)

for (let i=0; i<=100; i++){
    console.log(Math.random(),i)
}

console.log("script end");

// now guess the o/p. o/p will be start script 100 numbers then end script then promise retuend value
// then hello from settimeout. To yha pe bhi same as previous 1st line JS ne chlayi fir 2nd chli fir
// 3rd chli. 4th vali pe promise consume hua means vo browser ke pas gyi. then next me jo settimeout
// he vo bhi browser me gyi. or JS aage vali lines pe move kr gyi. broser ne settimeout ko callback
// queue me bhej diya as uska timeout 0 ms hi tha to turant bhej diya. fir promise ko microtask queue
// me bhej diya abhi last me jb callsstack me se execution khtm hoga to eventloop kisko pehle bhejega
// microtask queue vale ko ya callback queue valie ko?
// Note:- microtask queue has the higher priority than callbakc queue. 
// To pehle microtask queue vala aage jayega nd print hoga then settimemout vala.




// ** Funcion returning a Promise **

// A function can return a promise also.

function ricePromise(){
    const bucket = ["salt","rice",'vegetables','coffee',"chips"];
    return new Promise((resolve,reject)=>{
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice") //here u can return anything string, number,array,object...
        }
        else{
            reject("Couldn't do it"); //here also u can return anything.
        }
    })
}

ricePromise().then(
    // jb promise resolve hoga
    (resolveReturnedValue)=>{
        console.log("your ",resolveReturnedValue," is ready")
    }).catch(
        (errorValue)=>{console.log(errorValue)}
        )

// here pls rememeber one thing is, sirf agr hm log ricePormise.then krke call renge to call nhi hoga
// or error dega. kyuki yha pe hmne function bnaya he to uso us rne e liye call rna pdega uske bad 
// then method call r ste he. so ricepromise().then