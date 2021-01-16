//Ex. 1

// let a = 1, b = 1, c, d;
// c = ++a;
// alert(c); // ответ: 2, так как к "a" сначала прибавляется единица, а потом происходит присваивание
// //пример 2
// d = b++;
// alert(d); //ответ: 1, так как сначала происходит присваивание, а потом к "b"  прибавляется единица
// //пример 3
// c = 2 + ++a;
// alert(c); //ответ: 5, так как к "a" сначала прибавляется единица, потом суммируются числа, затем присваивание
// //пример 4
// d = 2 + b++;
// alert(d); //ответ: 4, так как сначала суммируются числа, потом к "b" прибавляется единица, затем присваивание
// alert(a); //3
// alert(b); //3

// Ex.2

// let a = 2;
// let x = 1 + (a *= 2);
// // Ответ: 5, так как сначала "a" присваивается новое значение путём умножения на 2, а потом суммируется с единицей в "x"

// Ex.3

// let a = -50
// let b = 42
//
// if(a > 0 && b > 0) {
//     alert(a-b)
// } else if(a < 0 && b < 0) {
//     alert(a*b)
// } else {
//     alert(a+b)
// }

//Ex.4

function summ(a,b) {
    return a + b
}
function diff(a,b) {
    return a - b
}
function comp(a,b) {
    return a * b
}
function div(a,b) {
    return a / b
}

// Ex.5

function mathOperation(arg1, arg2, operation) {
    return operation(arg1,arg2)
}

alert(mathOperation(1,2,summ))

// Ex.6

/*
...1 => рубль
...2-4 => рубля
...0, 5-9, 11-14 =>рублей
*/

function someMoney(count) {
    if(count % 10 === 0 || 5 <= count % 10 <= 9 || 11 <= count % 100 <= 14 ) {
        alert(`Ваша сумма в ${count} рублей успешно зачислена`)
    } else if(2 <= count % 10 <= 4) {
        alert(`Ваша сумма в ${count} рубля успешно зачислена`)
    } else if(count % 10 === 1) {
        alert(`Ваша сумма в ${count} рубль успешно зачислена`)
    }
}

const money = +prompt('Введите кол-во денег')
someMoney(money)

