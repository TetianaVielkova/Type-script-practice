const buttonClick = document.querySelector("button")! as HTMLButtonElement;
const inputFirst = document.getElementById("num1")! as HTMLInputElement;
const inputSecond = document.getElementById("num2")! as HTMLInputElement;

function addPlus(num1: number, num2: number) {
    return num1 + num2;
}

buttonClick.addEventListener("click", function() {
    console.log(addPlus(+inputFirst.value, +inputSecond.value));
});

//========================================================================================================

let age: number;
let nameUser: string
let toggle: boolean; 
let empty: null;
let notInitialize: undefined;

let callback: (a: number) => number;

age = 50;
nameUser = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a }; 


//======================================================================================
//========ANY========

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

//======UNKNOWN=======

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}


//============Tuple=====

let person: [string, number];

person = ['Max', 21];



//=======Enum======

enum Status {LOADING, READY};

const page = {
    status: Status.READY,
}

if (page.status === Status.LOADING) {
    console.log('Loading...');
}

if (page.status === Status.READY) {
    console.log('Ready!');
}

//===========Union===========

let union: string | number;

union = 'Test';
union = 100;

//======Literal=======

let literal: 'enable' | 'disable';

literal = 'enable';

//======



function showMessage(message: string):void {
    console.log(message);
}


function calc(num1: number, num2: number):number {
    return num1 + num2;
}

function customError():never {
    throw new Error('Error');
}


//===========Custom Types=======


type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}


const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}

const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}