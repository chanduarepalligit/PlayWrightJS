let firstName : string = "Chandu"
let lastName : string = "Arepalli"
let fullName : string = `My name is ${firstName} ${lastName}`
//console.log(fullName)
let originalString : string = "UserName : Admin | Password : admin123 "
//console.log(originalString.length)
//console.log(originalString.charAt(5))
let reversedString :string = ""
for(let i=originalString.length;i>=0;i--){
    reversedString+=originalString.charAt(i)
}
/* console.log(reversedString)
console.log(originalString.trim())
console.log(originalString.replace(/a/g,"A"))
console.log(originalString.replace(/[^a-zA-Z0-9]/g,""))
console.log(originalString.replace(/[0-9]/g,""))
console.log(originalString.toUpperCase(), originalString.toLowerCase())
console.log(originalString.slice(11,16))
console.log(originalString.substring(11,16)) */
//method to extract text from dynamic string
let splittedString : string[] = originalString.split(" ")
//console.log(splittedString)
let extractedUserName = splittedString[2]
//console.log(extractedUserName)
let number1 : string = "100"
let number2 : number = 100
//console.log(number1 === number2)
let message : string = "Chandu Arepalli"
/* console.log(message.includes("Are"))
console.log(message.startsWith("C"))
console.log(message.endsWith("i")) */
let stdCode : number = 123
let phNum : number = 989900
let std : string = String(stdCode)
//console.log(std+phNum)
let balance : string = "My account balance is $9,999.99"
balance = balance.replace(/[^0-9.]/g,"")
console.log(balance)
let bal : number = parseFloat(balance)
console.log(bal>10000)
let word : string = "My name is Chandu Arepalli"
let rever = word.split(' ').reverse().join(" ")
console.log(rever)

