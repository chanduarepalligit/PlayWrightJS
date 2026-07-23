let name : string = "chandu"
for ( let i:number=0;i<5;i++){
    //console.log(name)
}

let num:number = 1
let isPageLoaded : boolean = false
while(num>0){
    if(isPageLoaded||num>5){    
        break;   
    }
    num++
   // console.log("Loading") 
}

let names : string[] = ["chandu","fani","vani","sram"]
for(let i:number=0;i<names.length;i++){
   // console.log(names[i])
}
for (let name of names){
  //  console.log(name)
}

interface personInfo  {
    name : string,
    address : {
        city : string,
        pin : number
    },
    country : string
}
let person : personInfo = {
    name : "chandu",
    address : { 
        city : "Hyderabad",
        pin : 500072
    },
    country : "India"
}
for (let key in person){
   console.log(key)
    console.log(`${key} : ` ,person[key as keyof personInfo ])
}

let x:number = 0
do {
    //console.log("before condition")
    x++
} while (x > 1)

for(let i:number=0; i<10; i++){
    if(i===5){
        continue;
    }
    //console.log(i)
}