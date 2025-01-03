function calculateValues() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const energy = parseFloat(document.getElementById('energy').value);

    let resultText = '';

    if (!isNaN(voltage) && !isNaN(current)) {
        const resistance = (voltage / current).toFixed(2);
        resultText += `Resistance: ${resistance} Ω<br>`;
    }

    if (!isNaN(voltage) && !isNaN(current)) {
        const calculatedPower = (voltage * current).toFixed(2);
        resultText += `Power: ${calculatedPower} W<br>`;
    }

    document.getElementById('result').innerHTML = resultText || 'Please enter valid values!';
}