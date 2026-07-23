function greet(task:Function):void{
    task()
}
function message():void{
    console.log("Good morning")
}
greet(message)
greet(()=>{
    console.log("Arrow function morning")
})

function calculate(a:any,b:any,c:Function):void{
    console.log(c(a,b))
}
calculate(10,20,(x:number,y:number)=>(x+y))
calculate(20,10,(x:number,y:number)=>x-y)

setTimeout(()=>{
    console.log("Wait for 3 seconds and print")
},3000)