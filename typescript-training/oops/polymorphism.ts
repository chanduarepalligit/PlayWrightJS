class One{
    methodOne(a:number,b:number):number{
        return a+b
    }
}
class Two extends One{
    /* methodOne(a: number, b: number): any {
        return "Extended o/p" + (a+b)
    } */
}
let obj = new Two
console.log(obj.methodOne(1,3))