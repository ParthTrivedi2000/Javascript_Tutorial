const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body

child.addEventListener("click",()=>{
    console.log("You clicked on child !!!");
})
parent.addEventListener("click",()=>{
    console.log("You clicked on parent !!!");
})
grandparent.addEventListener("click",()=>{
    console.log("You clicked on grandparent !!!");
})
body.addEventListener("click",()=>{
    console.log("You clicked on body !!!");
})

// So yha pe aap itna code chla ke o/p check krna. pehle only click on grandparent see o/p, then
// click on parent see o/p, then click on child see o/p.
// To yha pe kya ho rha h ki element pe click krne se uske sath attach ki hui event to trigger ho hi rhi
// he bt uske sath element ke parent ke sath agr koi event attach ki he to vo bhi trigger ho rhi he.
// here for example: when u click on grandparent, grandparent vali event and body vali event bhi (kyuki
// yha pe grandparent ka parent element body he so uski event bhi) trigger ho rhi he. same for other elements also.
// JS ke is behavior ko Event Bubbling / Event Propogation kehte he.