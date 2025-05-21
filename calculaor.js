function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    
    errorElement.textContent = '';
    
    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Mohon masukkan kedua angka';
        return;
    }
    
    let result;
    switch (operation) {
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
                errorElement.textContent = 'Tidak bisa membagi dengan nol';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    if (Number.isInteger(result)) {
        resultElement.textContent = result;
    } else {
        resultElement.textContent = parseFloat(result.toFixed(4));
    }
}