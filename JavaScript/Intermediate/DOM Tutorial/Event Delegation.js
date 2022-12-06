// This is continued from previous. So first finish event bubbling--> then event capturing --> then event delegation
// vali ye fil open krna.
// To hmne pehle kya kiya tha ki grandparent ke liye bhi event add kiya, parent ke liye bhi kiya, and child ke liye bhi kiya
// Bt agr hm log Event Delegation ka cocnept use krenge to aesa krne ki jarurat nhi he.


const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const body = document.body

// Suppose yha pe mene ek grandparent ko hi select kiya he aur uspe hi ek event attach kiya he.
// grandparent.addEventListener("click",()=>{
//     console.log("You have clicked me!!");
// })

// Abhi yha pe kya hoga ki aap run krke try krna, child pe click krenge to bhi ye event trigger hoga
// agr parent pe clcik krenge to bhi ye event fire hoga. and agr grandparent pe krenge to to hoga hi.

// bt iska fayda kya ?

grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})

//  abhi code run krke try krna. jese hm log jante he vese target hme kya dega...jo element pe
// click kiya he vo dega ya to agr aesa likh du e.target.textContent to bhi jyada pta chlega
// usme hmne jo bhi element pe click kiya hoga uska text content target return krega.
// To abhi hm child pe click krenge to bhi upr explain kiya us trh ye grandparent vala event to fire
// hoga hi.( JS ki is effect ko event delegation bolte he.). isliye output me child btn return hoga.
// agr parent pe click kroge to o/p me parent btn return hoga. agr grndparent pe click kroge to
// grandparent return hoga.

// To ye he event bubbling, capturing and delegation ka benefit. ki jese upr dikhaya us trh
// sare element pe event na add krke, koi ek hi jgh pe event attach krke, koi 
// dusre element pe bhi click krke uske corresponding output fetch kr skte he.
