document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tugmalar button');
    const resultElement = document.querySelector('.input .num');
    let currentNumber = '';
    let currentOperator = '';
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('argument')) {
                currentOperator = this.textContent;
                currentNumber += ' ' + currentOperator + ' ';
            } else if (this.classList.contains('argument_teng')) {
                calculateResult();
            } else if (this.classList.contains('tugmalar_nol') && currentNumber === '0') {
                currentNumber = '0';
            } else if (this.classList.contains('tugmalar_nol') && /\s[+\-*/]\s/.test(currentNumber)) {
                currentNumber += '0';
            } else if (this.textContent === 'C') {
                clearDisplay();
            } else {
                currentNumber += this.textContent;
            }
            updateDisplay();
        });
    });
    function updateDisplay() {
        resultElement.textContent = currentNumber;
    }
    function clearDisplay() {
        currentNumber = '';
        currentOperator = '';
        updateDisplay();
    }
    function calculateResult() {
        try {
            const result = eval(currentNumber);
            resultElement.textContent = result;
            currentNumber = result.toString(); 
        } catch (error) {
            resultElement.textContent = 'Xato';
        }
    }
});


