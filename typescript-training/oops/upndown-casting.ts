//Upcasting --> Assigning a child class object to a parent class reference.
abstract class UpCasting{
    animal():void{
        console.log("This is an Upcasting")
    }
}
class Dog extends UpCasting{
    bark():void{
        console.log("Dog barks")
    }
}
let upc:UpCasting = new Dog
upc.animal()
//we cannot call upc.bark(), because reference is parent class and object created for child class


/*Downcasting is converting a parent class reference that actually points to a child 
object into a child class reference, allowing access to both the inherited parent methods 
and the child-specific methods.*/
abstract class DownCasting{
    animal():void{
        console.log("This is an Downcasting")
    }
}
class Cat extends DownCasting{
    meow():void{
        console.log("Cat meow's")
    }
}
let xyz:DownCasting = new Cat;
(xyz as Cat).meow()
//or
let cat = xyz as Cat
cat.animal()
cat.meow()