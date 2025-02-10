document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('btn');

    button.addEventListener('click', () => {
        // Get input values and convert to numbers
        const heightInput = document.getElementById('height').value;
        const weightInput = document.getElementById('weight').value;
        const height = parseFloat(heightInput);
        const weight = parseFloat(weightInput);
        const result = document.getElementById('output');

        let height_status = false, weight_status = false;

        // Validate height
        if(heightInput === '' || isNaN(height) || height <= 0) {
            document.getElementById('height_error').innerHTML = 'Please enter a valid height';
        } else {
            document.getElementById('height_error').innerHTML = '';
            height_status = true;
        }

        // Validate weight
        if(weightInput === '' || isNaN(weight) || weight <= 0) {
            document.getElementById('weight_error').innerHTML = 'Please enter a valid weight';
        } else {
            document.getElementById('weight_error').innerHTML = '';
            weight_status = true;
        }

        // Calculate BMI if both inputs are valid
        if(height_status && weight_status) {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            if(bmi < 18.6) {
                result.innerHTML = 'Under weight: ' + bmi;
            } else if(bmi >= 18.6 && bmi < 24.9) {
                result.innerHTML = 'Normal weight: ' + bmi;
            } else {
                result.innerHTML = 'Over weight: ' + bmi;
            }
        } else {
            alert('The form has errors');
            result.innerHTML = '';
        }
    });
});