

const passport=prompt("여권을 가지고 계신가요? (네/아니오)");

//string to int  
const age=Number(prompt("나이를 입력해주세요"));


if(passport === '네'){
    if(age < 20){
        console.log("나이가 어려서 대상자가 아닙니다");
    }
    
    else if(age >= 21 && age <= 29){
        console.log("워홀 대상자 입니다");
    }
    
    else if (age === 20 || age === 30) {
        console.log("계획서를 제출해주세요");
    }
    
    else{
        console.log("대상자가 아닙니다");
    }    
}

else{
    console.log("여권을 만들어주세요");
}





