// Методы для работы со строками


let string1 = "Lorem\n Ipsum is simply dummy text of the printing and typesetting industry. Lorem \rIpsum has\s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


console.log(string1.length);
// alert(string1);

// console.log(string1[string1.length - 1])
// console.log(string1.charAt(4));
// console.log(string1.toLowerCase());
// console.log(string1.toUpperCase());
// console.log(string1.slice(-3));
console.log(string1.substring(0,7));
console.log(string1.substr(0,7));
console.log(string1.charCodeAt(0));

console.log(String.fromCharCode(97));


str2 = "    123123123        ";

console.log(str2.trim());
let str3 = string1.concat(str2);
// console.log(string1.search("lorem"));
// console.log(string1.matchAll(/(Lorem)/gm));


// 1. улучшить калькуляторы = Применить Input, Кнопки, округление чисел 
//2. При вводе имени в input сделать обраьотку - вываести количество символов в поле, Поменять регистр букв убрать лишние пробелы Посмотреть метод replace() и заменить в тексте определенные символы
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// В заданиях использовать функции
