// sbse pehle aapko krna kya he ki ek object bnana he xmlhttprequest use krke
// const xhr = new XMLHttpRequest(); 
// console.log(xhr);
// ye upr kya hua ki xmlhttprequest ka koi constructor he vo call ho jayega and ek object me aa jayega
// means simply hm abhi ye xhr. use krke xmlhttprequest ki sari methods access kr skte he.
// and ha yad rkhna ki ye object aapko new keyword use krke bnana he as shown in above line. 

// So abhi hme xhr object ka use krke kya krna he ki ek HTTP request send krni he server ko. server kuch
// bhi ho skte he ya to hmara khud bhi bna skte he means hm khud se decide kr skte he ki server kya krega.
// ya to hm bni bnayi hui API ko use kr skte he. means actuall me to ya hoga ki aap forent end 
// developer ho to aapko backend developer APIs bna ke hi dega aapko sirf use krni he.

// now go to gogle --> serch json typicode --> 1st link aayegi vo aapko APIs provide krti he use krne ke liye.

// myFile.json file me jo he vo ek JSON (JS Object Notation). browser ne api send kr di or muje response
// me jo mila vo json ye file me rkha he. u can see this json object is array ke ander bahot sare objects
// he in terms of JS. Bt there aew some differences between objects in js and json.
// json object me jo key hoti he vo always string me hi deni pdti he 
// json object me methd nhi use kr skte.

// const URL = "https://jsonplaceholder.typicode.com/posts"  //ye vo URL he ispe se muje data chahiye aur ye
// vo  URL he jo browser send krega request data ke liye. isko hm endpoint bhi bol skte he.  
// const xhr = new XMLHttpRequest(); 
// console.log(xhr);

// Now 1st step is to use open method and send method to esnd this URL.
// step-1)

// xhr.open("GET",URL); //method takes 2 args. 1st is kya krna he vo URL pe jake 2nd is kha pe jana he.

// xhr.send();

// jb ye status = 4 hota he uska mtlb ye he ki response aa gya he. Jst try to google xhr status code.
// to response aa jane ke bad hm log use kr skte he use. see below code.
xhr.open("GET",URL); 

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr);
//         // console.log(xhr.response)
//         // console.log(typeof xhr.respnse) // o/p: string. means muje string de rha he. bt muje vo
//         // json object ko JS object me chahiye. to muje pehle parse krna pdega jiske liye already
//         // js ke json module me vo method avaialble he.
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         // console.log(data);
//         console.log(typeof data);
//     }
// }

xhr.onload = function(){
    console.log(xhr.readyState); //uper vali onreadyexchange method jb bhi state change hogi tb vo status
    // change krti he nd vo method ke through hm log if lga ke upr kiya vese use kr skte he. bt ye onload
    // method jb status=4 ho gya he tbhi vo return krti he to isme kuch if ya aesa kuch krne ki problem
    // nhi aati he to ye metod bhi hm log use kr skte he.
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();
// googl http request codes for more information about status code due to error or successful etc...



// -------------XHR practice and error handling in it.---------------------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts" 
// const xhr = new XMLHttpRequest(); 

// xhr.open("GET",URL);
// xhr.onload = () =>{
//     if(xhr.status >= 200 && xhr.status<300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }
// // Abhi suppose net disconnect krdo. aur ye chlane ki try kro to error e kuch aayega ki network error ya
// // aesa kuch...to network errr ko hadel krne ke liye hmare pas ek method hi he onerror.
// xhr.onerror = ()=>{
//     console.log("network error");
// }
// xhr.send();

const URL = "https://jsonplaceholder.typicode.com/posts" 
const xhr = new XMLHttpRequest(); 

xhr.open("GET",URL);
xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        // console.log(data);
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET",URL2);
        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send()
    }
    else{
        console.log("Something went wrong");
    }
}

xhr.onerror = ()=>{
    console.log("network error");
}
xhr.send();
// Abive is the example of ki agr muje pure data 
// ke sath koi specific id bhi fetch krni he to uske liye code tha

// abhi above jo use kya vo using callbackhell the means nested callbacks the as u can see above.
// bt that we can promisify means promise use krke bhi kr skte he.

// ---------XHR using promise -----------------------

const URL1 = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr  = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("Something Went wrong"));
            }
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data)
        return data;
    })
    .then(data=>{
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}ssss`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error =>{
        console.log(error);
    })