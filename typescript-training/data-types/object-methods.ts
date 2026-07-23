interface personInfo  {
    name : string,
    salary ?: number,
    age : number,
    address : {
        city : string,
        pin : number,
        state ?: string
    },
    country : string
}
let person : personInfo = {
    name : "chandu",
    age : 33,
    address : { 
        city : "Hyderabad",
        pin : 500072
    },
    country : "India"
}
person.salary = 200000
person.address.state = "Telangana"
person.age = 34
console.log(person)
console.log("name" in person)
for(let keys in person){
    //console.log(keys)
}
console.log(Object.keys(person.address))
console.log(Object.values(person))
delete person.salary
console.log(person)
console.log("-----------------------------")
console.log(Object.entries(person.address))

interface productInfo{
    name:string,
    id:number
}
let product : productInfo ={
    name:"amazon",
    id:123
}
console.log("----------------------------")
let mergedObject = {...person,...product}
console.log(mergedObject)