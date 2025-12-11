const redSlider = document.getElementById('red-slider');
redSlider.addEventListener('input', function(event){
    const redValue = document.getElementById('red-value');

    redValue.textContent = event.target.value;
});

const greenSlider = document.getElementById('green-slider');
greenSlider.addEventListener('input', function(event){
    const greenValue = document.getElementById('green-value');

    greenValue.textContent = event.target.value;
});

const blueSlider = document.getElementById('blue-slider');
blueSlider.addEventListener('input', function(event){
    const blueValue = document.getElementById('blue-value');

    blueValue.textContent = event.target.value;
});
