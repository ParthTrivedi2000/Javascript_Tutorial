// ** Clone Objects using Object.assign method

const obj = {
    "key1":"value1",
    "key2":"value2"
}

// const obj2 = obj;  // if I will do like this, then in my memory actually only one object is created and obj and obj2 both are pointing to that only.
// So whenever I will change value or add new key value pair in obj, then automatically that chage will be refleced into obj2 also.
// So we can clone or copy object using below methods. which will create another object in the memory.

// 1st Method:- using spread operator.
// const obj2 = {...obj};

// 2nd Method :- using Object.assign(empty structure, name of the structure of which we want to copy or clone)
const obj2 = Object.assign({},obj); 
