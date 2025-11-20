let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    if (result.value !== '' && !isOperator(result.value.slice(-1))) {
        result.value += operator;
    }
}

function clearResult() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}