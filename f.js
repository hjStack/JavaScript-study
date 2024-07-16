

// function gugudan(num){

//     for(let i=1; i<9; i++){
//         console.log(num*i);
//     }
// }


//객체 생성 

const HJ={
    name : "HJ",
    age: 20,
    city: "Seoul", 
    key: "value",

    sayHello : function(){
        console.log(`${HJ.name} Hello !`)
    }
}

// for(let 속성 이름 in 순회할 객체){
// }


for(let key in HJ){
    console.log(HJ[key]);
}