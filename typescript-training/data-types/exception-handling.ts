/* let input : any;
try{
    console.log(input.toLowerCase())
}catch(error)
{
    console.log(input.toLowerCase())
}finally{
    console.log("final")
} */
let age = 17
if(age < 18){
    throw new Error ("not eligible to vote");
}
else{ console.log("Eligible to vote") }
console.log("final")

