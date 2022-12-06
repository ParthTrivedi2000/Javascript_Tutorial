console.log("script start");
setInterval(()=>{
    console.log(Math.random())
},1000)
console.log("script end")

// setInterval is also similar to setTimeout. Bt the difference is as per the name setInterval will
// be called by every 1 sec. Bt yha pe bhi ek cheza yad rkhna ki browser bhle hi callback queue me
// hr ek sec ke ander call kr rha ho bt agr callstack empty hoga to hi event loop isko jane dega. 