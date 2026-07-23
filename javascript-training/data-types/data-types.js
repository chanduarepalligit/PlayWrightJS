let person = {
    name : "chandu",
    age : 34,
    address : {
        Country : "India",
        State : "TG"
    }
}
console.log(person.name)
console.log(person.address.Country)
console.log(person.address["State"])

let names = ["chandu","Phani", 100]
console.log(names[0] +" "+ names[1])
console.log(names[2])

function test(name){
    let test = name
    return test

}
function newTest(){
    console.log(test("abcd"))
}
newTest()

let empID = new Set()
empID.add(99)
empID.add(100)
empID.add(101)
console.log(empID)

let details = new Map()
details.set("empID", 123)
details.set("name", "chandu")
details.set("age", 34)
details.set("empID", 747)
console.log(details)

let date = new Date()
console.log(date.getMonth()+1)

let countryOfOrigin = Symbol()
let mobile = {
    model : "S23 Ultra",
    price : 100000,
    [countryOfOrigin] : "China"
}
console.log(mobile)


let square = (a)=>a*a
console.log(square(4))

function mainFunction(sum=(a,b)=>a+b){
    console.log(sum(3,9))
}
mainFunction()

function personInfo(name,age){
    console.log(`Name is ${name} and age is ${age}`)
}
personInfo("chandu")
