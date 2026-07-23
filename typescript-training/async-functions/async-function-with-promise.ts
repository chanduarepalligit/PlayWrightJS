function normalFunction():number{
    return Math.random()
}
//console.log(normalFunction())
/* 
async function asyncFunction():Promise<string>{
    return new Promise((resolve,reject)=>{
        let number = Math.random()
        if(number>0.5){
            resolve("Number is greater than 0.5")
        } else{
            reject("Number is less than 0.5")
        }
    })   
}
let func = await asyncFunction()
console.log(func) */

async function asyncFuncWait():Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let number = Math.random()
        if(number>0.5){
            resolve(`The number ${number} is > 0.5`)
        }
        else{
            reject(`The number ${number} is < 0.5`)
        }

    },10000)})
}
let call = await asyncFuncWait()
console.log(call)