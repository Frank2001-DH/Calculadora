let historyList = [];

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === "0" && value !== '.') {
        display.value = value; // Reemplazar el 0 inicial
    } else {
        display.value += value; // Agregar valor
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
    display.style.borderColor = '#e94560';
}

function calculate() {
    const display = document.getElementById("display");
    if (display.value === '') {
        showAlert("Por favor ingrese una expresión válida.");
        return;
    }
    
    try {
        const result = eval(display.value);
        historyList.push(display.value + " = " + result);
        updateHistory();
        display.value = result;
    } catch (error) {
        showAlert("Error en la expresión. Intente de nuevo.");
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (isNaN(value) || value < 0) {
        showAlert("Por favor ingrese un número válido para calcular la raíz cuadrada.");
        return;
    }
    const result = Math.sqrt(value).toFixed(2);
    historyList.push("√" + value + " = " + result);
    updateHistory();
    display.value = result;
}

function showAlert(message) {
    alert(message);
}

function toggleHistory() {
    const history = document.getElementById("history");
    history.style.display = (history.style.display === "none") ? "block" : "none";
}

function updateHistory() {
    const historyListElement = document.getElementById("historyList");
    historyListElement.innerHTML = ''; // Limpiar historial
    const lastTen = historyList.slice(-10); // Obtener las últimas 10 entradas
    lastTen.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        historyListElement.appendChild(li);
    });
}

function changeCalculator(type) {
    const extraOptions = document.getElementById("extraOptions");
    const currencyOptions = document.getElementById("currencyOptions");
    const imcOptions = document.getElementById("imcOptions");
    const calcTitle = document.getElementById("calcTitle");

    if (type === 'currency') {
        currencyOptions.style.display = "block";
        imcOptions.style.display = "none";
        calcTitle.textContent = "Conversor de Moneda";
    } else if (type === 'imc') {
        imcOptions.style.display = "block";
        currencyOptions.style.display = "none";
        calcTitle.textContent = "Calculadora de IMC";
    }
    extraOptions.style.display = "block";
}

function convertCurrency() {
    const input = document.getElementById("currencyInput").value;
    if (!input) {
        showAlert("Por favor ingrese un valor para convertir.");
        return;
    }
    const result = (input * 0.85).toFixed(2); // Conversión ficticia
    document.getElementById("currencyResult").textContent = `${input} USD = ${result} EUR`;
}

function calculateIMC() {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    if (!weight || !height) {
        showAlert("Por favor ingrese peso y altura.");
        return;
    }
    const imc = (weight / (height * height)).toFixed(2);
    document.getElementById("imcResult").textContent = `Su IMC es: ${imc}`;
}
