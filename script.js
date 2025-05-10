let result = document.getElementById('result');

function insertNumber(num) {
    result.value += num;
}

function insertOperator(operator) {
    let lastChar = result.value.charAt(result.value.length - 1);
    if (lastChar != '+' && lastChar != '-' && lastChar != '*' && lastChar != '/') {
        result.value += operator;
    } else {
        result.value = result.value.substr(0, result.value.length - 1) + operator;
    }
}

function insertDecimal() {
}
let lastNum = result.value.split(/[+\-\/*]/).slice(-1)[0];
if (lastNum.indexOf('.') == -1) {
    result.value += '.';
}

function clearResult() {
    result.value = '';
}
{
    function clearResult() {
        result.value = '';
    }
}
function backspace() {
    result.value = result.value.substr(0, result.value.length - 1);
}

function calculate() {
    let expression = result.value;
    let lastChar = expression.charAt(expression.length - 1);
    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
        expression = expression.substr(0, expression.length - 1);
    }
    let resultValue = eval(expression);
    result.value = resultValue;
}