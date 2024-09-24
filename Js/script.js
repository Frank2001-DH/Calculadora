// Inicializa el valor en la pantalla de la calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Agrega un número al display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Agrega un operador al display
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Agrega un punto decimal
function appendDot() {
    let display = document.getElementById('display').value;
    
    // Verifica que solo se pueda agregar un punto por número
    if (!display.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

// Elimina el último carácter del display
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Calcula el resultado de la operación en el display
function calculate() {
    let display = document.getElementById('display').value;
    
    try {
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Cambia el signo del número actual
function changeSign() {
    let display = document.getElementById('display').value;
    
    // Si el número es positivo, cámbialo a negativo, y viceversa
    if (display) {
        if (display.charAt(0) === '-') {
            document.getElementById('display').value = display.slice(1);
        } else {
            document.getElementById('display').value = '-' + display;
        }
    }
}

// Inicializa la calculadora al cargar la página
window.onload = function() {
    clearDisplay();
};
