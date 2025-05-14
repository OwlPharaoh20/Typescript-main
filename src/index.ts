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


interface MathFunc {
    (x: number, y: number): number
}  

const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y 


interface PersonInterface {
    id: number
    name: string
    register(): string
}


//Classes 
class Person implements PersonInterface {
    id: number 
    name: string 

    constructor(id: number, name: string) {
        this.id = id 
        this.name = name 

    }

    register() {
    return `${this.name} is now registered`
 }

}

 

const brad = new Person(1, "Brad Traversy")
const mike = new Person(2, "Mike Smith")



//Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}


const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.name)
console.log(emp.register())



//Generics 
function  getArray<T>(items:  T []) : T [] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

strArray.push