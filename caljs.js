var reset = false;
var count = 0;

function clear() {
    if (reset) {
        document.Calculator.answer.value = '';
        reset = false;
    }
}

function myFunction() {
    count++;
    if (count % 2 == 0)
        document.getElementById("copyright").innerHTML = "⋯           ☉           ↵ ";
    else
        document.getElementById("copyright").innerHTML = "© Coderstien";
}

function dispNum(x) {
    clear();
    if (document.Calculator.answer.value == 'Invalid' || document.Calculator.answer.value == 'NaN' || document.Calculator.answer.value == 'Infinity' || document.Calculator.answer.value == '-Infinity' || document.Calculator.answer.value == 'undefined') {
        document.Calculator.answer.value = '' + x;
    } else
        document.Calculator.answer.value += x;
}

function show(operanda) {

    if (operanda == '.') {

        if (document.Calculator.answer.value == '') {
            document.Calculator.answer.value = '0' + operanda;
        } else {
            document.Calculator.answer.value += operanda;
        }

    } else if (operanda == 'π') {

        if (document.Calculator.answer.value == '') {
            document.Calculator.answer.value = Math.PI.toFixed(10);

        } else if (document.Calculator.answer.value == 'NaN' || document.Calculator.answer.value == 'Infinity' || document.Calculator.answer.value == '-Infinity') {
            document.Calculator.answer.value = '';
        } else {

            document.Calculator.answer.value += operanda;
        }

    } else if (operanda === 'log') {
        document.Calculator.answer.value = Math.log10(document.Calculator.answer.value).toFixed(10);
    } else if (operanda == 'x^2') {

        document.Calculator.answer.value *= document.Calculator.answer.value;

    } else if (operanda == '%' || operanda == '!' || operanda == '/' || operanda == '*' || operanda == '-' || operanda == '+' || operanda == 'x^2' || operanda == 'log') {

        if (document.Calculator.answer.value == '') {
            if (operanda == '-')
                document.Calculator.answer.value = '-';
            else
                document.Calculator.answer.value = '';
        } else if (document.Calculator.answer.value == 'Invalid' || document.Calculator.answer.value == 'NaN' || document.Calculator.answer.value == 'Infinity' || document.Calculator.answer.value == '-Infinity' || document.Calculator.answer.value == 'undefined') {
            document.Calculator.answer.value = '';
        } else if (operanda == '-') {
            var len1 = document.Calculator.answer.value.length - 1;
            var ar = document.Calculator.answer.value;
            if (ar[len1] == '-')
                document.Calculator.answer.value += '';
            else
                document.Calculator.answer.value += '-';
        } else if (1) {
            var len = document.Calculator.answer.value.length - 1;
            var ar = document.Calculator.answer.value;
            if (ar[len] == '%' || ar[len] == '*' || ar[len] == '+' || ar[len] == '!' || ar[len] == '/')
                document.Calculator.answer.value += '';
            else
                document.Calculator.answer.value += operanda;
        } else {
            document.Calculator.answer.value += operanda;
        }
    } else if (operanda == '<~') {
        var num = document.Calculator.answer.value;
        var len = num.length - 1;
        var newNum = num.substring(0, len);
        document.Calculator.answer.value = newNum;
    } else if (operanda == '=') {
        if (document.Calculator.answer.value == '')
            alert('Invalid Operation!');
        else {
            document.Calculator.answer.value = eval(document.Calculator.answer.value);
            reset = true;
        }
    }
}

function fact(value) {
    if (value == '') {
        document.Calculator.answer.value += 'Invalid';
    } else {
        var factorial = 1;
        while (parseInt(value) > 0) {
            factorial = factorial * parseInt(value);
            --value;
        }
        document.Calculator.answer.value = factorial;
    }
}