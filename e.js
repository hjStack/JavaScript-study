

// const age=Number(prompt("나이를 입력하세요"));
// let name=prompt("이름을 입력하세요");

// function ageVerification(age,name){

//     if(age < 21){
//         return 'Go away' + name + '!';
//     }
  
//     else{
//         return 'Welcome' + name + '!';
//     }

// }


// function averageLengthofTheWords(str1,str2){
//     let average = (str1.length + str2.length)/2;
//     return Math.round(average);
// }



// function shortestString(str1,str2,str3){

//     let result=str1;

//     if(str1.length > str2.length){
//         result=str2;
//     }

//     else if(str2.length > str3.length){
//         result=str3;
//     }

//     return result;

// }

function cutString(num,str){
    return str.slice(0,num);
}

function compareNumbers2(numStr1,numStr2){
    const num1=parseInt(numStr1);
    const num2=parseInt(numStr2);

    if(num1 > num2){
        return String(num1+10);
    }

    else{
        return String(num2+10);
    }
}


function makeTimeString(hour,min,sec){
    let twoDigitHour,twoDigitMinute,twoDigitSec;

    if(hour >= 1 && hour <= 12){
       twoDigitHour=hour;
    }

    if(min >=0 && min<=59){
        twoDigitMinute=min;
    }

    if(sec >=0 && sec <= 59){
        twoDigitSec=sec;
    }

    return `현재 시각 ${twoDigitHour} : ${twoDigitMinute} : ${twoDigitSec}`;
}

