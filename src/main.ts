import './style.css';
console.log('hello world from Vite');


let name: string | undefined | null = 'Jenny';

const myNumberArray: number[] = [1, 2, 3, 4, 5];
const myStringArray: string[] = ["Hello", "World"];

const namesArray: string[] = [];
namesArray.push("Jenny");


const myTuple: [string, number] = ["Hello", 123];

function printName(name: string) {
    console.log(`My name is ${name.toUpperCase()}`);
}

printName('Jenny');

function sum(num1: number, num2: number): string | number {
    if (num1 > 0) {
        return 'num1 more than zero';
    } else {
        return num1 + num2;
    }

}

const result = sum(1, 2);


const names = ['Alice', 'Barbie', 'Christopher'];

names.forEach((name)=>{
    console.log(`Hello ${name.toUpperCase()}`);
})


interface Position  {
    x: number;
    y: number;
}

// type Position = {
//     x: number;
//     y: number;
// }

//Object Type
let position:{x: number, y: number} = {
    x:0,
    y:0,
}

position.x = 100;
position.y = 200;

// Function Params object
function printPosition(position:Position){
    console.log(`Location is x = ${position.x}, y = ${position.y}`);
}

printPosition({x:300, y: 400});

//Type Alias
type UserID = number | string;

function getUserID(id: UserID){
    console.log(`UserID: ${id}`);
}

getUserID(123);

getUserID("123");

interface Address{
    country:string;
}
//interface merging
interface Address{
    postal: number;
}

// const address: Address ={
//     country: 'Thailand',
//     postal: 1234
// }
function printAddress (address:Address){
    console.log(`My address is ${address.country}, ${address.postal}`)
}
printAddress({country: 'Thailand',postal: 1234});

//Type Assertions
const myCanvas1 = document.getElementById("target_canvas") as HTMLCanvasElement;

//strict null check
function convertToUpperCase(name: string | null){
    if(name === null){
        throw new Error("invalid name");
    }
    return name.toUpperCase();
}

convertToUpperCase("Zach");
//Example Usage
//console.log(convertToUpperCase(null));
console.log(convertToUpperCase("Zach"));

//type: unknown
let value: unknown;

value = false;
value = 50;
value = "Hello Mom";
value = {}

function printData(data: unknown){
    if(typeof data === 'string'){
        console.log(data.toUpperCase());
    }
    if(typeof data === 'number'){
        console.log(data * 2);
    }
}

printData('Hello');
printData(5);

//type: never
function assert(name: string): never{
    throw new Error(`not allowed name`);
}

//try catch
try{
    console.log('Hello World');
} catch(error){
    if(error instanceof Error){
        console.log(error.message);
    } else{
        console.log(String(error));
    }
}


