// Synchronous vs Asynchronous JavaScript

console.log("script start")

for(i=0; i<10000; i++){
    console.log("Hello World")
}

console.log("script end");

// Abhi yha pe upr vale coed me kya hoga ki (run krke check krna) 1st line print hogi. uske bad
// ek loop lgaya he vo jb tk pura complete nhi hota he means 10,000 times hello world print
// nhi krta he screen pe tb tk mera next code execute nhi ho skta (means script end vali line).
// This is known as Syncronous programming. means ek ke bad ek ya to ek khtm hone ke bad hi
// dusra next code execute ho skta he. 
// So here disadvantage is ye upr jo loop he vo hmare liye blocking he. means hm block code bhi
// bol skte he. means jb tk vo complete nhi ho jata tb tk next kuch bhi nhi ho skta he.

// Real World Example :-
// jese hm jb website bnate he to usme APIs ke through data database me se fetch krte he. Bt ye cheeza
// thoda time leti he. So tb tk next code execute nhi hoga this is the disadvantage of Syn. code.

// JS is a Synchronous Programming language. And single Threaded.

// So abhi JS to synchronous programming language he to hm log Asynchronously code kese kr skte he?
// let's see


// setTimeout() :- this function will take 2 argument. 1st one is callback function it means function
// 2nd is delay or time after which that function should call in milisecond.
console.log("start script")

setTimeout(()=>{
    console.log("Inside setTimeout");
},1000);

console.log("script end");

// run the above coe and chec the output. isme kya ho rha he ki 1st script start print hoga then
// then script end then inside settimeout print hoga.
// To backend me work kese ho rha he vo smjte he?
// Abhi jb JS engine ye vali file chlayegi to GEC create hoga. 1st line sbse pehle execute hogi.
// uske bad JS 2nd line me setTimeout function dekhti he. Abhi ye setTimeout functionality vo browser 
// provide krta he. To JS ye function browser ko de degi. and next line pe move ho ke execution continue rhegi.
// Browser kya kr rha he 1000 ms it means 1 sec k wait kr rha he. Jese hi 1 sec complete hogi to 
// browser ye function ko callback queue me bhej dega. (Abhi event loop kya krta he i vo monitor ki
// trh he. vo check krta he ki callstack me kuch execution ke liye pda he or koi execution chl rha h
// ki nhi. Agr chl rha hoga to vo callback queue me jiten bhi task ho bt kisi ko execution ke liye callsstack
// me nhi jane dega. Agr callstack me kuch nhi he means execution kuch nhi ho rha he to vo callback queue
// me se task ko aage callstack me execution ke liye bhejega.) To abhi pehle vo line script end vali
// print ho jayegi uske bad callstack me execution ke liye event loop callback queue me hmara jo
// setTimeout vala jo callback function pda he usko jane dega. 

console.log("start script")

setTimeout(()=>{
    console.log("Inside setTimeout");
},0);

for(i=0; i<100; i++){
    console.log("Hello World")
}

console.log("script end");

// Abhi from the above explaination try to guess the o/p of above code. it is unexpected.
// o/p will be: start script then 100 times Hello World then script end then Inside setTimeout.
// How you get the output like this as you have enterd delay of 0ms? (This is the interview question).
// Now listen very carefully. JS ne 1st line execute ki. then 2nd line dekhi to uso browser ke pas bhej
// di and 3rd line se execution continue kiya. Abhi kya hoga ki browser ne 2nd argument ke hisab se
// 0ms wait krne ke bad turant callback queue me callback function bhej diya. Bt abhi as u know ki 
// Event Loop is the monitor so usne dekha ki callstack me already kuch execution chl rha he. So 
// callback queue vale task ko execution ke liye callstack tk aage nhi jane dega. Abhi Js ne for loop
// complete kr diya. fir uske bad script end bhi execute kr diya. Abhi callstack empty hua he means 
// ysme koi execution nhi chl rha he so abhi callback queue vala task callback stack me jake execute
// ho jayega. it means Inside settimeout print hoga.

// So kehne ka mtlb ye he ki jb setTimeout use kiya he to uske bad vala sara caoed pehle execute ho jayega
// puri file khtm ho jayegi uske bad settimeout me likha he vo execute hoga.
// So pls remember this ki ye time kya he jo hmne setTimeout me as a 2nd argument diya he vo?
// vo minimum time delay indicate krta he ki minimum 1000ms ka to wait krna hi he aesa.Bt end time
// to kuch bhi ho skta he.
// Bt practically kya hota he ki vo jo time likha hota he generally utne me vo execute ho jata he 
// kyuki koi person 0 ms to rkhega nhi means 1 ya to 2 sec ya aesa kuc hi rkhega. itne me to niche vala
// pura code execute ho jayega.

// So here we can see ki settimeout vala code vo block nhi kr rha he and aage vala execute ho rha he
// So this is the example of Asynchronous programming in JS.

// One more important point is ye callback function he vo ek Id bhi return krta he. jo hm log fetch krke
// use bhi kr skte he.

console.log("start script")

const id = setTimeout(()=>{
    console.log("Inside setTimeout");
},1000);

for(i=0; i<100; i++){
    console.log("Hello World")
}
console.log("setTimeout id is",id);
console.log("script end");

// use kese krenge id ko?
// see belo code

console.log("start script")

const id1 = setTimeout(()=>{
    console.log("Inside setTimeout");
},1000);

for(i=0; i<100; i++){
    console.log("Hello World")
}
console.log("cliearing timeout");
clearTimeout(id1);
console.log("script end");

// Abhi output check kroge to Inside setTimeout line print nhi hogi.
// Ye clearTimeout function backend me kya krta he ki vo ye id vala setTimeout function jo he
// usko callback queue me se hta deta he.
