document.getElementById('calcularIMC').addEventListener('click', function() {
    // Obtener los valores de altura y peso
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Validar los valores
    if (!altura || !peso || altura <= 0 || peso <= 0) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Mostrar el resultado
    document.getElementById('resultadoIMC').value = imc.toFixed(2);
});
