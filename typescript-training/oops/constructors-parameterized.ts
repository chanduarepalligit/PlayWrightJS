class Employee{

    empID : number;
    constructor(empID:number){
       this.empID = empID
    }

    employeeDetails(empName:string){
        console.log("Employee id is : "+this.empID+" name is "+empName)

    }
    employeeRole(empRole:string){
        console.log("Employee id is : "+this.empID+" role is "+empRole)
    }

}
let obj = new Employee(747)
console.log(obj.empID)
obj.employeeDetails("Chandu")
obj.employeeRole("QA Lead")