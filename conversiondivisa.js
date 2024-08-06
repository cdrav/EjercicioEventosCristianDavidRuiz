
const exchangeRate = 4055; 

const dollarsInput = document.getElementById('dollars');
const pesosInput = document.getElementById('pesos');


// conversion
function convertDollarsToPesos() {
    const dollars = parseFloat(dollarsInput.value);
    const pesos = dollars * exchangeRate;
    pesosInput.value = pesos.toFixed(2);
}

//  convertir de pesos colombianos a dólares
function convertPesosToDollars() {
    const pesos = parseFloat(pesosInput.value);
    const dollars = pesos / exchangeRate;
    dollarsInput.value = dollars.toFixed(2);
}


dollarsInput.addEventListener('input', convertDollarsToPesos);
pesosInput.addEventListener('input', convertPesosToDollars);


convertDollarsToPesos();
