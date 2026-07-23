let fruits : string[] = ["mangoes","apple","banana"]
let prices : number[] = [200,100,40]
let fruitPrices : (string|number) [] = ["mangoes",200,"Apple",100]
console.log(fruits[0])
fruits.push("grapes")
console.log(fruits)
fruits.unshift("guvva")
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.splice(1,2,"dragon")
console.log(fruits)
let newFruits : string[] = fruits.slice(1,4)
console.log(newFruits)
let veggies : string[] = ["potato","carrot"]
let fruitsNveggies : string[] = fruits.concat(veggies)
console.log(fruitsNveggies)
console.log(fruits.indexOf("apple"))
for(let fruit of fruits){
    console.log(fruit)
}
console.log(fruits.reverse())
prices.sort((a,b)=>a-b)
console.log(prices)