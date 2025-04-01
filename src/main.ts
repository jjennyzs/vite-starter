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




