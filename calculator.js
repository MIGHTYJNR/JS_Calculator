// document.getElementById('calcForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     let num1 = parseFloat(document.getElementById('num1').value);
//     let operator = document.getElementById('operator').value;
//     let num2 = parseFloat(document.getElementById('num2').value);
//     let result;

//     if (operator === 'add') {
//         result = num1 + num2;
//     } else if (operator === 'subtract') {
//         result = num1 - num2;
//     } else if (operator === 'multiply') {
//         result = num1 * num2;
//     } else if (operator === 'divide') {
//         if (num2 === 0) {
//             result = 'Error: Division by zero';
//         } else {
//             result = num1 / num2;
//         }
//     }else if (operator === 'modulo') {
//         result = num1 % num2;
//     }

//     document.getElementById('result').textContent = result;
// });


document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let num1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        case 'modulo':
            result = num1 % num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').textContent = result;
});
