// koi bhi event ko hm log capture krte skte he. uska mtlb kya hua?
// to agr koi event capture ki hui he mtlb browser sbse pehle vo chlayega. Ya to this is not the proper
// justification. but try to run the below code. U will understand better.

// Event ko capture kese krte he?
// jese hm event listen krte time 2 argument rkhte he. same vhi 2 argument to rkhni hi he. bt ek
// extra 3rd argument add kr deni he as a boolean value. so for example: niche code me 3rd arg
// true add ki he. 
// abhi suppose code run  kiya or mene child pe click kiya, to browser kya krega ki sbse pehle jis
// element pe click kiya he uske parent ke bhi parent ke bhi parent...means parent most element ke
// sath koi event captured he ki nhi vo check krega. agr us element pe event captured he to brower
// sbse pehle us event ko fire krega. to o/p ki 1st line Capture body aayegi. fir uske bad us 
// parent most element ke child ke pas captured event he ki nhi vo chek krega. agr he to uski evnt
// trigger krega. aese main element jis pe hmne click kiya he vha tk ke jitne bhi parent he uske liye
// check krega or agr kisi pe bhi event captured hogi to vo fire krega. and then last me hmne child pe
// click kiya he hmare case me to pehle uski bubbling events (means here parent,grandparent,body ki)
// non captured event trigger krega and main element ki bhi eventtrigger kreega.
// To cycle kuch is prakar hogi ----> captured, captured captured....bubbled,bubbled etc.. 
// run the below code to see the o/p and get more understanding. niche vale coed me 4 captured
// event he and 4 non captured event he. u can change it by urself nd observe the output.

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body

// capturing events
child.addEventListener("click",()=>{
    console.log("Capture child !!!");
},true)
parent.addEventListener("click",()=>{
    console.log("Capture parent !!!");
},true)
grandparent.addEventListener("click",()=>{
    console.log("Capture grandparent !!!");
},true)
body.addEventListener("click",()=>{
    console.log("Capture body !!!");
},true)


// non captured events
child.addEventListener("click",()=>{
    console.log("Bubble child !!!");
})
parent.addEventListener("click",()=>{
    console.log("Bubble parent !!!");
})
grandparent.addEventListener("click",()=>{
    console.log("Bubble grandparent !!!");
})
body.addEventListener("click",()=>{
    console.log("Bubble body !!!");
})