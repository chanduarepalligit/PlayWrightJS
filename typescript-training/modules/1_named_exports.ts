export function add(a:number, b:number) : number {
    return a*b
}
export function sub(a:number, b:number) : number {
    return a-b
}

function name (first:string, last:string) : string{
    return first+" "+last
}
export{name}

export default function abc (a:number,b:number) : number {
    return a*b
}
//default function can or cannot have name, both will work while imported in another file with anyname