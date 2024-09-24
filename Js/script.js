function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function calculate() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert("Por favor ingrese una expresión válida.");
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        alert("Por favor ingrese un número válido.");
    } else {
        display.value = Math.sqrt(value);
    }
}

function changeCalculator(type) {
    const extraOptions = document.getElementById("extraOptions");
    const currencyOptions = document.getElementById("currencyOptions");
    const imcOptions = document.getElementById("imcOptions");
    const calcTitle = document.getElementById("calcTitle");

    extraOptions.style.display = "block";

    if (type === 'currency') {
        calcTitle.innerText = "Calculadora de Cambio de Moneda";
        currencyOptions.style.display = "block";
        imcOptions.style.display = "none";
    } else if (type === 'imc') {
        calcTitle.innerText = "Calculadora de IMC";
        currencyOptions.style.display = "none";
        imcOptions.style.display = "block";
    }
}

function convertCurrency() {
    const currencyInput = document.getElementById("currencyInput").value;
    if (currencyInput === "") {
        alert("Por favor ingrese una cantidad.");
        return;
    }
    const result = (currencyInput * 0.85).toFixed(2); // Ejemplo de conversión a EUR
    document.getElementById("currencyResult").innerText = `${currencyInput} USD = ${result} EUR`;
}

function calculateIMC() {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;

    if (weight === "" || height === "") {
        alert("Por favor ingrese peso y altura.");
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById("imcResult").innerText = `Tu IMC es ${imc}`;
}
