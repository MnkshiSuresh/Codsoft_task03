document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    let displayValue = '0';

    function updateDisplay() {
        display.innerText = displayValue;
    }

    function inputDigit(digit) {
        if (displayValue === '0') {
            displayValue = digit;
        } else {
            displayValue += digit;
        }
        updateDisplay();
    }

    function inputOperator(operator) {
        if (displayValue === '0') return; // Prevent operators at the start
        displayValue += operator;
        updateDisplay();
    }

    function inputDecimal(dot) {
        if (!displayValue.includes(dot)) {
            displayValue += dot;
        }
        updateDisplay();
    }

    function resetDisplay() {
        displayValue = '0';
        updateDisplay();
    }

    function calculate() {
        try {
            displayValue = String(eval(displayValue));
        } catch (error) {
            displayValue = 'Error';
        }
        updateDisplay();
    }

    updateDisplay();

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event;

        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            inputOperator(target.dataset.operator);
            return;
        }

        if (target.classList.contains('decimal')) {
            inputDecimal(target.dataset.decimal);
            return;
        }

        if (target.classList.contains('all-clear')) {
            resetDisplay();
            return;
        }

        if (target.classList.contains('equal-sign')) {
            calculate();
            return;
        }

        inputDigit(target.dataset.number);
    });
});
