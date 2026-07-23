class Employee {

    empID : number = 1234;
    empName : string = "Chandu"

    empProjectDetails():void{
        console.log("This is method in a class")
    }

}
let obj = new Employee()
console.log(new Employee().empID)
console.log(obj.empName)
obj.empProjectDetails()