// variable declaring

var id:number = 10;
const empName:string = 'Prateek';

let random:number | string = 4;
random = 'Pk';

var bool:boolean = true;
// bool = 5; //throw error

let val1 = 5;
const val2 = 5; // type is 5 not number
const val3: number = 5;

let rand:any = 'Pk';
rand = 5;
rand = true;
rand = 6.6;
rand = () => { }

// object
const person1 = {
    id: 1,
    name: 'Prateek'
}

// console.log(person1.age);

const person2: object = { // perosn 2: {}
    id: 1,
    name: 'Prateek'
}

// console.log(person.name); //you have to define property to access the object property
// console.log(person.age);

const person3: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Prateek'
}

//Arrays

let arr1 = ['Pk', 1];
// let arr2:string [] = [1,2,3] //error
let arr2:string [] = ['1', '2']

//tuple (fixed length and type)
// let arr3:[string, number] = [1,'string'] //error
let arr3:[string, number] = ['string', 1]
// let arr3:[string, number] = ['string', 1, 4] //error length is larger
arr3.push(2); // tuple ignores push methods


enum Role {ADMIN = 5, AUTHOR = 'AUTHOR' } // enum for fixed values
console.log(Role.ADMIN);

//alias
type combineUnion = string | number;
type combineUnion2 = boolean | Function

let variable: combineUnion2 = () => {};

// function

function fn1():number {
    return 5;
    // return 'String';
}

function fn2(): number | string {
    return 'Pk';
}

function fn3(n1:number, n2:number):string {
    // return n1 + n2; //throw error
    return (n1 + n2).toString(); 
}

function fn4(n1: number = 5){
    return;
}

function fn7(n1:number, n2:number): void {
}

//here both function are different which take different no of parameter
let a:Function; 
a= fn4
a = fn7
a()

let b:(val: number)=> void; //define function structure
b= fn4
// b = fn7 //errro now
a()


function fn5(): undefined {
    // return 5; // error
    // return 'string'; //error
    // return true; //error
    // return () => {}; //error
    return;
}

function fn6(): unknown {
    // return 5;
    // return 'string';
    // return true;
    // return () => {};
    return;
}

function fn8(): any {
}

function fn9(n1:number, cb:(val:number)=>void){
    console.log(cb(n1));
}

fn9(4,(val:number)=>{
    console.log(val);
    return val;    
})

//unknown vs any

let userInput:unknown;
let userName:string;

userInput =5;
userInput ='Max'
// userName = userInput; //error

if(typeof userInput === 'string'){
    userName = userInput;
}

// never type

function fun():never{
    throw 'Error';
}

function func():never{
    while(true){}
}

//class

class Emp {
    private a:number = 4;
    public b:number = 4;
    protected c:number = 4;
    
    Emp(){
        this.a = 5;
        this.b=5;
    }

    fun():void{
        console.log(a,b);
    }
}

let obj = new Emp;
obj.Emp()
obj.fun()
