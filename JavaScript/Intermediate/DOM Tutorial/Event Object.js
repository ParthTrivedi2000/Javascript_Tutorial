// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// remember hmare pas JS Engine he jo code ko line by line execute krta he.
// js Engine --- line by line execute karta hai 
// nd browser he uske pas  ye JS Engine hota he + ye extra features hote he. vo extra features dusra
// kuch nhi bt webApis hoti he.
// // browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi
// To koi bhi event jb bhi fire hogi to browesr uspe njr rkhta he.

// abhi suno jab bhi mai kisi bhi element pe event listener add hoga or event fire hogi to
// broser uspe njr rkhta he.
// So jb browser ko pta chla ki user ne event perform kiya means click kiya (jo event hmne add kiya he vo)
// to browser 2 kam krega. (specificaly browser ke ander ke WebApis ye kam krenge)
// 1) addlistener ke ander jo callback function pass kiya he vo JS Engine ko execute krne ke liye dega.
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega.
// or JS engine se exection hone ke bad ye information hme Object ke form me milegi, return hogi. Jo hm yha pe alg se
// fetch kr skte he. Vo kese recieve krenge?
// vo hm log call back function me argument pass krke recive kr skte he. Argument hm kuch bhi pas krskte he
// bt convention ye he ki ya hm event ya e pas kre. see below code for more understanding.

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


const allButtons = document.querySelectorAll(".my-buttons button");


for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}

// Difference between e.currentTarget and e.target
// target means kis elemen ne hmare event ko trigger kiya vo
// nd currentTarget means kis element pe hmne hmara eventlistner attach kia tha
// e.currentTarget me kya hoga ki jb hmne btn click kiya us time pe konse element (yha btn) pe event listener attach tha
// vo dega.
// or agr e.target likha he to kya hoga ki, jb mene click kiya tb eventListner kha se fire hua tha vo dega.