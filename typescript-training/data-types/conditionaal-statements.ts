let percentage : number = 90
if(percentage>=90){
    if(percentage>=95){
        console.log("Scholar")
    }
    else{
        console.log("Nearing scholar")
    }
}
else if(percentage>=75 && percentage < 90){
    console.log("First Class")
}
else{
    console.log("Good Percentage")
}

let env : string = "uat"
switch(env) {
    case "prod" : console.log("prod env")
    break
    case "qa" : console.log("qa env"); break
    default : console.log("UAT env")
}
