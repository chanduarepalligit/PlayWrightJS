class Parent{
    course:string="JS"
    static name:string="Chandu"
    printProject():any{
        console.log("JS project")
        console.log(this.course)
    }
}
class Child extends Parent{
    course: string="TS"
    static name:string="Chandu"
    printProject(): void {
        console.log("TS project")
    }
    printCourse(course:string):any{
        console.log("Course is : "+course)
        console.log("Course for current class object is : "+this.course)
        return "Course for parent class object is : "+super.printProject()
    }
}
let obj = new Child
console.log(Parent.name)
obj.printCourse("PlayWright")

//------------------------------------------------------------------------------------------------------
interface Browser{
    open():void;
}
interface OS{
    type():void;
}
class ChromeBrowser implements Browser,OS{
    open(): void {
        console.log("Chrome browser opened")
    }
    type(): void {
        console.log("Windows Machine")
    }
}
class FirefoxBrowser implements Browser{
    open(): void {
        console.log("Firefox browser opened")
    }
}
class Test{
    private browser:Browser
    private os:OS
    constructor(browser:Browser,os:OS){
        this.browser=browser
        this.os=os
    }
    execute():void{
        this.browser.open()
        this.os.type()
    }
}
//new Test(new ChromeBrowser(), new ChromeBrowser()).execute(); // created 2 objects i.e, diff instaces
let chrome = new ChromeBrowser // only 1 object created, less memory used
//new Test(chrome, chrome).execute()

function Test12():void{
    //console.log(this)
}
Test12()