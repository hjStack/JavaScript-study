

// function isAdult(age){
//     return age>18;
// }

// function isBiggerThan(a,b){
//     return a<b;
// }

// function isEvenAndAdult(num){
//     return num % 2 === 0 && num > 18;
// }


// before15minutes

function before15minutes(hour,minute){
    
    let result=0;
    
    if(minute >= 15){
        result=`${hour} 시 ${minute-15}분입니다.`
    }

    else if(minute  === 0){
        result = `23시 ${minute - 15 + 60}분입니다.`
    } 

    else{
        result= `${hour-1}시 ${minute-15 + 60}`
    }

    return result;
}
