document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number.");
        return;
    }

    let result;
    let resultUnit;

    switch (unit) {
        case 'Celsius':
            result = {
                Celsius: temperatureInput,
                Fahrenheit: (temperatureInput * 9/5) + 32,
                Kelvin: temperatureInput + 273.15
            };
            resultUnit = 'Celsius';
            break;
        case 'Fahrenheit':
            result = {
                Celsius: (temperatureInput - 32) * 5/9,
                Fahrenheit: temperatureInput,
                Kelvin: ((temperatureInput - 32) * 5/9) + 273.15
            };
            resultUnit = 'Fahrenheit';
            break;
        case 'Kelvin':
            result = {
                Celsius: temperatureInput - 273.15,
                Fahrenheit: ((temperatureInput - 273.15) * 9/5) + 32,
                Kelvin: temperatureInput
            };
            resultUnit = 'Kelvin';
            break;
    }

    document.getElementById('resultText').innerHTML = `
        <strong>Results:</strong><br>
        Celsius: ${result.Celsius.toFixed(2)} °C<br>
        Fahrenheit: ${result.Fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${result.Kelvin.toFixed(2)} K
    `;
});
