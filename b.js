
const age=prompt("나이를 입력해주세요")

// not a number 
if(isNaN(age)){
    console.log("숫자를 입력해주세요")
}

else{
    console.log(`당신의 나이는 ${age} 살입니다.` )
}


// 동등 연산자는 타입이 다른 경우라고 하더라도 
// 강제 타입 캐스팅을 함 

// 일치 연산자는 타입이 같을 경우에만 같다고 여김(===)

//false
// 1. null
// 2. false
// 3. undefined
// 4. 0
// 5. NaN
// 6. ""


//논리 연산자
// 1. OR = 하나라도 true이면 true , 둘다 false이면 false
// 2. AND = 둘다 true이면 true, 하나라도 false이면 false
// 3. NOT 


// alert() = 메시지를 띄워줌
alert("안녕하세요")

alert("" || "0" || true)
// = 여기서 "0"이 출력되는 이유는 단축 평가 때문
// cf) 단축 평가란 만자 나온 피연산자만으로 결과가 확정되면
// 그 다음 피연산자는 측정하지 않음

alert(!true)


// 문자열 결합 연산자
// = "code" + "union" = "codeunion"

// 나누기 연산자 : /
// 나머지 연산자: %

