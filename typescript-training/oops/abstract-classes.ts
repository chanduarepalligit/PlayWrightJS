abstract class Abs{
    methodOne():void{
        console.log("normal method")
    }
    abstract methodTwo():void;
    abstract methodThree():void;
    abstract methodThree():void;
}
class Normal extends Abs{
    methodTwo(): void {
        console.log("abs1 method")
    }
    methodThree(): void {
        console.log("abs2 method")
    }
}
let obj = new Normal()
obj.methodOne()
obj.methodTwo()

//--------------------------------------------------------------------------------

abstract class BasePage{

    openBrowser(){
        console.log("Browser opened");
    }

    abstract pageActions():void;

    closeBrowser(){
        console.log("Browser closed");
    }
}
class LoginPage extends BasePage{

    pageActions():void{
        console.log("Login Test");
    }
}
class EmployeePage extends BasePage{

    pageActions():void{
        console.log("Employee Creation Test");
    }
    newEmployeeCreation():void{
        console.log("Employee creation")
    }
}
function execute(page:BasePage){

    page.openBrowser();

    page.pageActions();

    page.closeBrowser();
}

execute(new LoginPage())
execute(new EmployeePage())
