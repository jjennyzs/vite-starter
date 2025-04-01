import './style.css';
console.log('hello world from Vite');


let name: string | undefined | null = 'Jenny';

const myNumberArray: number[] = [1,2,3,4,5];
const myStringArray: string[] = ["Hello","World"];

const namesArray: string[] = [];
namesArray.push("Jenny");


const myTuple:[string,number] = ["Hello", 123];

function printName(name: string){
    console.log(`My name is ${name.toUpperCase()}`);
}

printName('Jenny');


