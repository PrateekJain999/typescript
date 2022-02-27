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

enum role {ADMIN = 5, AUTHOR } // enum for fixed values

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

function fn5(): unknown {
    return;
}