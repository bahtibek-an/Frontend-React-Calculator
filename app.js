document.addEventListener('DOMContentLoaded', function() {
    // Tugmalarning barcha elementlari
    const buttons = document.querySelectorAll('.tugmalar button');
    const resultElement = document.querySelector('.son');
    let currentNumber = '';

    // Har bir tugma uchun event listener
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('argument')) {
                // Operator tugmasini bosganda
                currentNumber += this.textContent;
            } else if (this.classList.contains('argument_ikki') || this.classList.contains('argument_uch') || this.classList.contains('argument_tort')) {
                // Qo'shish, ayirish, ko'paytirish va bo'lish operatorlarini bosganda
                currentNumber += this.textContent;
            } else if (this.textContent === 'C') {
                // C tugmasini bosganda
                currentNumber = '';
                resultElement.textContent = currentNumber;
            } else if (this.textContent === '=') {
                // Igalik tugmasini bosganda
                try {
                    const result = eval(currentNumber);
                    resultElement.textContent = result;
                    currentNumber = result.toString();
                } catch (error) {
                    alert('Notogri hisoblanish');
                    currentNumber = '';
                    resultElement.textContent = currentNumber;
                }
            } else {
                // Boshqa tugmalarni bosganda
                currentNumber += this.textContent;
                resultElement.textContent = currentNumber;
            }
        });
    });
});
