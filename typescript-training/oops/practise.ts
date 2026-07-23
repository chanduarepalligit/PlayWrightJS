abstract class New{

    abstract login():void;
    homePage():void{
        console.log("In the Home page")
    }
    abstract logout():void;

}
class Admin extends New{
    login(): void {
        console.log("Logged in as Admin")
    }
    logout(): void {
        console.log("Logged out")
    }
    //reference type is not declared in abstract class
    adminTest():void{
        console.log("Admin test")
    }
}
class Employee extends New{
    login(): void {
        console.log("Logged in as Employee")
    }
    logout(): void {
        console.log("Logged out")
    }
}
//type 1 ( polymorphism )
/* let now : New
now = new Admin()
now.login()
now.homePage()
now.logout()
//type 2 ( direct object creation )
let employee = new Employee
employee.login()
employee.homePage()
employee.logout()  */
//type 3 ( Passing object to a function (Dependency Injection + Polymorphism) )
function execute(page:New){
    page.login()
    page.homePage()
    page.logout()
    if(page instanceof Admin){
        page.adminTest()
    }

    //(page as Admin).adminTest()
    
}
execute(new Admin())
execute(new Employee())

