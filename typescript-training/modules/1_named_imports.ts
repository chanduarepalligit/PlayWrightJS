import abc,{ add,sub,name } from "./1_named_exports.ts";
//import abc from "./1_named_exports.ts" 
import { add as addition,sub as substraction,name as fullname } from "./2_named_exports.ts";
import * as export2 from "./2_named_exports.ts"
console.log(add(4,6))
console.log(name("Chandu","Arepalli"))
console.log(export2.name("Phani","Arepalli"))
console.log(addition(10,20))
//default function can be imported with any name and will be call the default export method
console.log(abc(3,30))
