//1 (i)
console.log("1. Program Start");
setTimeout(()=>{
    console.log("2. Set Timeout Called");
},4000)

setImmediate(()=>{
    console.log("3. Set Immediate Called");
})
process.nextTick(()=>{
    console.log("4. Process.nexTick got executed");
})
console.log("5. Finished");

//Priority Order : 
//Synchronos
// Process.nextTick
// Event Loop -> setTimeout, setImmediate