// switch


// let day = 6;



// if(day==5){
//     "Понедельник"
// }else if(day==4){

// }

// switch(day){
//     case 1: alert("понедельник");break;
//     case 2:alert("вторник");break;
//     case 3:alert("среда");break;
//     case 4:alert("Четверг");break;
//     case 5:alert("пятница");break;
//     default:alert("Вы ввели другой номер");break;
// }

let userName = "Andrey";

// function hello(name){
//     alert("Hello " + name + "!");
// }
function hello(){
        let userName = "Vasja";
        alert("Hello " + userName + "!");
    }

function calc(a,b){
    return  (a + b);
}
let result = calc(3,6);
document.write(`Результат: ${result}`);

let func1 = function(obj){
    return console.log(obj)
}
func1({name:"vitaly",surname:"Korabelnikov"});
console.log(func1);




function count(){
    let int1 = +document.querySelector('[name="var1"]').value;
    let int2 = +document.querySelector('[name="var2"]').value;

    document.querySelector('[name="result"]').value = int1+ int2;
}

