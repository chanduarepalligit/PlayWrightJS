let name:string = "chandu"
console.log(name)
let age:undefined
console.log(age)

let address : string | number = "Hyderabad"
address = 500072
console.log(address)

let data : any = "Hyderabad"
data = 100
console.log(data)

interface personInfo  {
    name : string,
    address : string,
    pin : number
}
let person : personInfo = {
    name : "chandu",
    address : "Hyderabad",
    pin : 500072
}
console.log(person)

let names : (string|number)[] = ["chandu", 100, "phani", 100]
console.log(names)

let tup : [string,number] = ["chandu", 100]
console.log(tup)

function test(name :string) : string{
    let test = name
    return test

}
function newTest() : void{
    console.log(test("abcd"))
}
newTest()

let empID : Set<number|string> = new Set()
empID.add(99)
empID.add(100)
empID.add("test")
console.log(empID)

let details : Map<string|boolean,string|number> = new Map()
details.set("empID", 123)
details.set(true, "chandu")
details.set("age", 34)
details.set("empID", 747)
console.log(details)