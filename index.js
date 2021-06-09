
function GetVal(param) {
    //Берём текущий текст из строки "Вводимые данные" и добавляем к нему текст из объекта по событию onclick
    document.form.calculator.value = document.form.calculator.value + param
}

function ClearWindow() {
    //Берём текущий текст из формы ввода и перезаписываем в него пустой текст
    document.form.calculator.value = ''
}

function DeleteSymbol() {
    //Получаем значение из формы
    let all_string = document.getElementById('calculator').value;
    //Хватаем строку  --->  обрезаем крайний правый символ
    document.form.calculator.value = all_string.substring(0, all_string.length - 1)
}

function GetResultMath() {
    let text = document.form.calculator.value
    if (text=='') {
        document.getElementById('res').innerText = 'Введите выражение:)'
    }
    else {
        document.getElementById('res').innerText = eval(text)
    }

}
