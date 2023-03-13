// alert() Prompt confirm



// alert("hello World");

// let num1 = prompt("Сколько вам лет?","");
//     alert(num1);

    // let answer = confirm("Вам есть 18?",true);
    //     console.log(answer);

    //document.write();

// let ans2 = ;
// document.write(prompt("Введите имя пользователя"));


// let num2 = 3.55;
// let num3 = "45";
// let logic = false;

// console.log(Number((logic)));


// Базовые операции с числами

// let x=5,y=6;

// document.write(x + y);
// document.write(x - y);
// document.write(x * y);
// document.write(x / y);
// document.write(x**2 / y**2);
// document.write(y % x);

// сложение (Конкатенация) строк

let str1 = "Hello",str2 = "World";

document.write(str1 +" "+ str2);
document.write("<h1 class=\"heading1\">"+ str1 +" "+ str2 + "</h1>");

// Шаблонные строки
let html = `
   
    <div class="container">
        <p>${str1} ${str2}</p>
        <p></p>
    </div>
`;
document.write(html);


// Спрашивает ввести 2 числа и выводит из сумму

let num5 = 10;
// num5++;

// num5 = num5+5;
 num5 +=5;
// /num5--;

// console.log(num5);


let html2 = "";

html2+="<h2>";
html2 +="дополнено";
html2+="</h2>";

document.write(html2);

// Побитовые операторы

// AND &&
// OR ||
// XOR ^

// Операторы сравнения
{/* < > <= >= == ===  */}

// console.log("5" === 5);
// // Unicode
// console.log("Ab" < "Aa"); 


// let a = null;
// let b;

// console.log(a,b);

// if(5 < 3 || 4>2){
//     alert("ok");
// }else{
//     alert("not ok");
// }

// let year = 1984;
// if(year < 1990){
//     alert("Вы дитя 80");
// } else if(year = 1990 && year < 1995){
//     alert("Вы дитя 90");
// }else if(year>1995){
//     alert("Вы совсем молоды");
// }


let number = 14;

number  = (number<10) ? "0"+number : number;

// console.log(number);

// ВВедите температуру за окном
// Ниже 0 - Одевайтесь тепло
// 0...5 а улице холодно
// > 5 скоро весна
// let temp = 0;
// if(temp < 0){
//     console.log("Одевайтесь тепло")
// }else if(temp == 0 && temp <5){
//     console.log("На улице холодно")
// }else{
//     console.log("Cкоро весна")
// }



// циклы

let x=0;
// while (x<10){
//     console.log(x);
//     x++;
// }

do {
    // console.log(x);
    x++;
}while(x<10);


for(let y=0;y<=100;y++){
    if(y % 2 !== 0){
        // break;
        continue;
    }
    console.log(y);
    
}


// Вывести только те числа которые делятся на 2 от 0 до 100

// Сделать какой нибудь калькулятор (2 шт)  (кредитный, площадей) просит ввести  данные делает вычисления и красиво в виде HTML ввыодит результат 
// Какуляция зароботной платы Вводим зарплату до уплаты налогов

// Напишите цикл, который предлагает (prompt) ввести число большее чем 100 Если введено число меньшее то просит заново ввести число