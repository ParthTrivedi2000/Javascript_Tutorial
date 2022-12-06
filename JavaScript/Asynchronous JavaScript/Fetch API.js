const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch is inbuilt JS function which make GET request to the URL passed in argument.
// fetch() bdle me return promise krta he.

// const whatisthis = fetch(URL);
// console.log(whatisthis);

// so as we know ki agr hme Promise mil rha he then we can apply .then for resolve and .catch on reject.

fetch(URL)
    .then(response =>{
        // console.log(response)  // yha pe aap  run krke dekho to muje data nh mil rha e baki sari
        // information mil rhi he. to hm log ko json use krna pdega jisme data store hoga. json isme
        // already diya hota h.
        // console.log(response.json) // ye run krke dekhoge to aapko promise print hua dikhega uska 
        // mtlb ye bhi muje promise return kr rha he. or agr promise mil rha he to usko me yha pe return kra 
        // ke aage .then lga ke check kr skta hu ke ye promise resolve hone pe kya deta he.
        return response.json()
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error); //abhia aap URL bigad ke check kro to catch vala block nhi chla hoga
    })

// So Important to note here is pls yad rkhna ye:- ki fetch promise return krta he vo reject means
// error tbhi deta he jb network error he. uske alava ki ye 404 error ya 500 vali ya means koi bhi
// error ko vo bydefault error nhi ginega. to uska mtlb ye hua ki vo response me jayega 404 vala
// ya koi dusra error(except network error). to usko aap chek kr skte ho console.log krke.
// To agr aapne dekha hoga to 404 error ke time response me ok ki value false hogi. or 200 vale 
// code means success ke time ok ki value true hogi. to iska use krke hm log network error ke alava
// ki errors ko bhi handle kr skte he. let's see how.

fetch(URL)
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

// abhi upr jo dekha vo hmne fetch method dekhi. bt now muje POST method use krnni he. it means
// data server me bhejna he or vha pe create krana he. isme hm fetch function me URl ke sath ek
// object bhi pas krte he as a 2nd argument. jisme server ko kya data send krna he vo body key me mention
// kiya rehta he. aur ek ccheeze hm log ko aadan pradan JSON format me krna he to hm log directly
// body key ke data ko send nhi krenge. usko pehle JSON object me convert krke send krenge
// to json ki stringify method ka use krke hm log convert kr skte he. see below code.
// yad rkhna ki ye object me headers key also plays very imporant and crucial role. So we have to
// include that also.
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })