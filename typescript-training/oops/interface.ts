//Interface is an special abstract class, it will only allow abstract methods
interface AbsClass1{
    one:number;
    absMethodOne():void;

    absMethodTwo():void;

    absMethodThree():void;

}

interface AbsClass2{
    absMethodFour():void;

    absMethodFive():void;

    absMethodFive():void;

}

class Test implements AbsClass1,AbsClass2{
    one: number = 100;
    absMethodOne():void{
        console.log("One")
    }

    absMethodTwo():void{
        console.log("Two")
    }

    absMethodThree():void{
        console.log("Three")
    }
    absMethodFour():void{
        console.log("Four")
    }

    absMethodFive():void{
        console.log("Five")
    }

}
let obj = new Test()
console.log(obj.one)
obj.absMethodFive()