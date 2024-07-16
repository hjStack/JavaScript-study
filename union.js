
// console.log(codeunion)
// let codeunion="Awesome";

// let,const : hoist방식이 이루어짐
// = 메모리 변수가 최상단으로 올라가서 초기화가 이루어지진 않지만 hoist방식은 이루어지지만 
// 초기화가 이루어지지 않았기 때문에 변수에 접근 불가 

// 함수의 hoist 방식

// console.log(add(1,2));  // 함수의 hoist 방식

// const add = function(x,y){
//     return x+y;
// }

// var: 선언과 초기화가 동시에 일어남 // -> undefined 
// var키워드 로 선언된 변수는 선언문 코드가 실행되기 전에 이미 호이스팅 과정에서 undefined 로 값이 초기화됩니다. 
// 즉, 선언단계와 초기화단계 모두 호이스팅 과정에서 진행됩니다. 
// 코드가 실행되기 전에 이미 값이 초기화된 상태이기 때문에 선언문을 만나기 전에도 해당 변수에 접근할 수 있습니다.

//함수의 호이스팅 은 함수 선언식에서만 발생하며, 함수 표현식은 변수의 호이스팅이 발생합니다.


function getMass(force,acceleration){
    let mass;
    mass=force/acceleration;
    return mass;
}


console.log(getMass(12,3));

//함수 표현식은 정의한 함수를 선언한 변수에 할당
// 함수 내부의 구현된 코드에서 아무것도 return하지 않으면 undefined를 리턴하여 출력값은 undefined가 됩니다.

let sentence;
sentence=introduce("HJ");

function introduce(name){
    return `안녕하세요 제 이름은 ${name}입니다.`;
}


