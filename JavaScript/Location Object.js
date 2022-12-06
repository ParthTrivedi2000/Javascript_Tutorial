// Location object is used when we want any information about URL.
console.log(location.href) // will return full URL:- http://127.0.0.1:5500/index.html
console.log(location.pathname) // will return index.html it means last point in URL
console.log(location.protocol) // will return 1st point in URl or simply will return protocol (o/p:-http (here in our case))
// there other methods also port, server etc....to get information about URL.

// One more thing is. above is regading fetching information about URL. bt even we can assign something also.


// So suppose man lo ki hmare pas ek btn he uspe onclick event lgayi he or uske function yha pe me dikha
// rha hu. to vo btn pe click krte hi vo website pr redirect ho jana chahiye. this is our task.

// there r 4 methods to assign
// 1) using window.location
function fun(){
    window.location = "https://www.google.com"
}

// 2) using location.href
function fun(){
    location.href = "https://www.google.com"
}

// 3) using assign
function fun(){
    location.assign("https://www.google.com");
} // actually upr vali do method me bhi backend me ye assign() method hi call hoti he.
// bt yad rkhna ki upr ke teeno method browesr ki history me vo URL dalenge it means aap vo URL pe
// chle jao uske bad aapko back jane ka arrow show hota he. Bt agr replace method use ki he to vo
// hme redirect to krta he bt vo histroy me URL ki entry nhi krta to aapne replace method use ki he to
// redirect hone ke bad fir back arrow show nhi hoga.

// 4) using replace
function fun(){
    location.replace("https://www.google.com");
}

// One more thing is reload method. usse page reload hota he.
function fun(){
    location.reload(); //means kyi jgho pr aapne dekha hoga ki  reload ka icon diya he website me
    // or uspe click krte hi page reload hota he.
}




// ----------  Navigator Object ---------------------------------

// Navigator Objects se JS me Browser ke bare me and browser ki capabilities ke bare me ye 2 cheeze mainly pta kr skte he.

// So main to iska use ye pta krne ko hota he ki aapko ye pta krna he ki user konsa browser use kr rha he.
// Real world use :- suppose khi hi pe dekha ho to aesa likha hota he ki ye website konse browser me sbse
// jyada open hui he. Ya to ye website chrome me jyada acche se wprk kregi. ye sb cheze vo log
// navigator objec ka use krke nikalte he. Ya to user ka browser knsa he..usme kya kya cheez enable he
// kya kya disable he etc etc...

// few properties
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);
// etc etc...

// few methods
console.log(navigator.javaEnabled()); 
// etc etc...


// ---------------------- Screen Object ---------------------------------------

// Screen Object ka use abhi website jo bhi screen pe visible he uske attribute ke bare me information
// prapt krne ke liye use hota he.

console.log(screen.width);
console.log(screen.height);
console.log(screen.colorDepth);
console.log(screen.orientation);
// etc etc...

// Generally ye navigator and screen object data analytics ke liye use hote he. means bdi bdi company
// isko analyse krti he ki user ye website kese open krna pasand krta he ya to kitni color depth me user
// dekhna jyada pasant krta he etc etc...

