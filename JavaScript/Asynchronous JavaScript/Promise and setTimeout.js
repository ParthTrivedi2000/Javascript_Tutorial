// Promise and setTimeout

// Suppose I want to execute resolve or reject after 2 secs. How to do it? see below code.

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if (value){
                resolve();
            }else{
                reject();
            }
        },2000)
    })
}

myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})