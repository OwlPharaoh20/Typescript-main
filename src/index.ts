//Basic Types 

let id: number = 5
let company: string = 'Dutch Corp'
let isPublished: boolean = true 
let x: any = 'Hello'
let age: number 

//age = 30

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']

//Tuple 
let person: [number, string, boolean] = [1, 'Wang', true]

//Tuple Array 
let employee: [number,string] [] 

employee = [
    [1, 'Wang'],
    [2, 'Wang'],
    [3, 'Wang'],
]


//Union 

let pid: string | number
pid = '22'


//Enum 
enum Direction1 {
    Up = 1,
    Down, 
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}



//Objects 
type User= {
    id: number
    name: string
} 


/*
const user: User = {
    id: 1,
    name: "John"
}
*/

//Type Assertion
let cid: any = 1
//let customerId = <number>cid

let customerId = cid as number 

//Functions 
function addNum(x: number, y: number): number { //: number is the return type
   
    return x + y 
    }   

    //console.log(addNum(1,2))

    function log(message: string | number ):void {
        console.log(message)
    }


    //log(1)
    //log('Hello')


// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1, 
  name: 'John',
};


