let sum = (a:number,b:number)=>a+b
let square = (a:number)=>a*a
console.log(sum(1,4))

function mainFunction(square : (a:number)=>number):void{
    console.log(square(3))
}
mainFunction(square)

function funcInsideFunc(newFunc:(a:number)=>number):void{
    console.log(newFunc(5))
}
funcInsideFunc((a:number)=>a*a)

function messageText():string{
    return"text message"
}
let greet = messageText()
console.log(greet)

function personInfo(name:string,age?:number):void{
    console.log(`Name is ${name} and age is ${age}`)
}
personInfo("chandu")

function personInfo2(name:string,age:number=32):void{
    console.log(`Name is ${name} and age is ${age}`)
}
personInfo2("chandu new",34)

function sumOfNumbers(...numbers:number[]):number{
    let sum = 0
    for(let num of numbers){
        sum+=num
    }
    return sum
}
console.log(sumOfNumbers(1,2,3,4,5))