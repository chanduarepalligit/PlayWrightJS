class Parent{
    public empID : number = 1234
    static empRole : string = "QA"
    empName : string = "Chandu"
    private pay:number = 0

    static newChild():void{
        //console.log(this.empID)
        //console.log(this.empName)
        console.log(Parent.empRole)
       // console.log(Parent.pay)
    }
    private subChild():void{
        Parent.newChild()
    }

    public setPay(pay:number):void{
        this.pay = pay
        console.log("private subchild method is called")
        this.subChild()
    }

    public getPay():number{
        return this.pay
    }
    public getPayLog():void{
        console.log(this.pay)
    }
}
Parent.newChild()
let obj = new Parent()
obj.getPay()
//obj.subChild()
class Child extends Parent{
    extendedChild():void{
        Parent.newChild()
        //obj.subChild()
        console.log(this.empID)
        console.log(Parent.empRole)
    }
}
let obj1 = new Child()
obj1.extendedChild()

class Outsider{
    outSide():void{
        //console.log(obj.empID)
        Parent.newChild()
        console.log(Parent.empRole)
        obj.setPay(27)
        console.log(obj.getPay())
        obj.getPayLog()
    }
}
let obj2 = new Outsider
obj2.outSide()