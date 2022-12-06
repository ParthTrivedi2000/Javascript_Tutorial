// iske pehle hm log promise use krte the aur usme .then.then.then.... krke sb kuch kr rhe the.
// to Async -await se hm log vo bar bar .then or vo sb kuch kiye bina easily data prapt kr skte
// he. Bt remember ki async await ke backend me basicaly ye promises hi run hote he.

const URL = "https://jsonplaceholder.typicode.com/posts";

// previously

// fetch(URL)
//     .then(response=>{
//         // console.log(response);
//         return response.json()  //as we know this must br used to parse the response from jason to JS object.
//     })
//     .then(data=>{
//         console.log(data);
//     })

// Now we can use Async-await. agr me koi func. function getPost() bnau to ye normal function he.
// bt agr me koi function ke aage async likh ke bnau async function getPot() to ye normal nhi he.
// arur ek cheeze hamesha yad rkhna ki async funcion always promise return krta he.

async function getPosts(){
    const response = await fetch(URL);  // ye await me hm log promise pas krte he. ye aawait kya krta he
    // ki from the name itself, await wait krta he usme pas kiya hua promise ke resolve ya t reject hone
    // ka. to jese hi vo resolve ya reject hoke kuch return krta he then we can use it.
    // console.log(response) // o/p: ek promise hoga
    const data = await response.json(); 
    // ek bat yad rkhna ki await bhi return promise hi krta he so.
    return data;
}

// const myPosts = getPosts();
// console.log(myPosts); // if I will do like this then screen pr promise milega na ki data to aese nhi krna he muje.

getPosts()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log("inside catch");
        console.log(error);
    })

// yha pe bhi ye catch vala error sirf network error ke time pe hi chlega. to alg se hme error 
// handling krni hogi.

async function getPosts(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// upr hmne dekh liya ki normal function me async kese lgate he. Bt agr hme arrow func. ka use
// krna ho to usme async kese or kha pe lgta he.? --> argument pass krne se pehle lgta he arrow
// function me. see below cde.

const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}