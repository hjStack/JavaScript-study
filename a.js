

// 텍스트를 입력할 수 있는 입력 함수 
let enter=Number(prompt("비밀번호를 입력해주세요"));

let password=1234;

if(password ===  enter){
    console.log("돈 인출 가능합니다");
}
else{
    console.log("비밀번호가 아닙니다 ");
}

// 이렇게 하는데도 else 출력문이 나오는 이유는 enter,password
// 타입이 다르기 때문

console.log(typeof(enter))