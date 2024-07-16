
let money=1000000

// function taxCal(money){
//     return money*0.1
// }

// let tax= taxCal(money)

// function realSalary(money,tax){
//     console.log(money - tax)
// } 

// realSalary(money,100000)    


// let name="HJ";
// let age=25;
// const birth=2.9;

// console.log(`안녕하세요 제 이름은  ${name}이고 나이는  ${age}살 입니다`)


function makeBun(){  //함수 선언
    return "🍞" 
}


const makeBun2 = function(){  //함수 선언
    return "🍞" 
}

// 1. 함수 선언
// 2. 함수 표현 
// 3. 화살표 함수

const makeBun3=() => {
    return "🍞" 
}

const makeBun4 = () => "🍔"

 
function addMeat(bun){
    return `${bun} + 🥩`
}

function makeBurger(meat){
    return `${meat} = 🍔`
}


let bun = makeBun();  //함수 표현 
let meat=addMeat(bun);
let burger=makeBurger(meat);

console.log(burger)



console.log(makeBun3)
console.log(makeBun2)
console.log(makeBun3)
console.log(makeBun4)



function triple(num){
    return num*3;
}

let result=triple(3);
console.log(result);