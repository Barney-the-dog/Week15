function sumUp() {
    let x = +prompt('Введите первое число')
    let y = +prompt('введите второе число')
    alert(x + y)
}

function subtract() {
    let x = prompt('Введите первое число')
    let y = prompt('введите второе число')
    alert(x - y)
}

function devide() {
    let x = prompt('Введите первое число')
    let y = prompt('введите второе число')
    if (y == 0) {
        alert("Нельзя делить на ноль");
    }
    else {
        output = x / y;
        alert(output);
    }

}

function multiply() {
    let x = prompt('Введите первое число')
    let y = prompt('введите второе число')
    alert(x * y)
}